package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateMonitorRequestBodyMonitorSchedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cron")
    public String cron;
    public UpdateMonitorRequestBodyMonitorSchedule withCron(String cron) {
        this.cron = cron;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public UpdateMonitorRequestBodyMonitorSchedule withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
}