package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SingleMonitor200ApplicationJsonMonitorSchedule {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("cron")
    public String cron;
    public SingleMonitor200ApplicationJsonMonitorSchedule withCron(String cron) {
        this.cron = cron;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("nextRun")
    public String nextRun;
    public SingleMonitor200ApplicationJsonMonitorSchedule withNextRun(String nextRun) {
        this.nextRun = nextRun;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("timezone")
    public String timezone;
    public SingleMonitor200ApplicationJsonMonitorSchedule withTimezone(String timezone) {
        this.timezone = timezone;
        return this;
    }
}