package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class CreateMonitorRequestBodyMonitorSchedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cron")
    public String cron;
    public CreateMonitorRequestBodyMonitorSchedule withCron(String cron) {
        this.cron = cron;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public CreateMonitorRequestBodyMonitorSchedule withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
}