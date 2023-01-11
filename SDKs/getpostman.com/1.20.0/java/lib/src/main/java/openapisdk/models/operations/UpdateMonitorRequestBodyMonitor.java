package openapisdk.models.operations;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class UpdateMonitorRequestBodyMonitor {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("name")
    public String name;
    public UpdateMonitorRequestBodyMonitor withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("schedule")
    public UpdateMonitorRequestBodyMonitorSchedule schedule;
    public UpdateMonitorRequestBodyMonitor withSchedule(UpdateMonitorRequestBodyMonitorSchedule schedule) {
        this.schedule = schedule;
        return this;
    }
}