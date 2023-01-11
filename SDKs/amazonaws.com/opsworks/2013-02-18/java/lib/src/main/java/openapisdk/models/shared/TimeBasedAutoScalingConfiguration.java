package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * TimeBasedAutoScalingConfiguration
 * Describes an instance's time-based auto scaling configuration.
**/
public class TimeBasedAutoScalingConfiguration {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoScalingSchedule")
    public WeeklyAutoScalingSchedule autoScalingSchedule;
    public TimeBasedAutoScalingConfiguration withAutoScalingSchedule(WeeklyAutoScalingSchedule autoScalingSchedule) {
        this.autoScalingSchedule = autoScalingSchedule;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstanceId")
    public String instanceId;
    public TimeBasedAutoScalingConfiguration withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
}