package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

public class SetTimeBasedAutoScalingRequest {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AutoScalingSchedule")
    public WeeklyAutoScalingSchedule autoScalingSchedule;
    public SetTimeBasedAutoScalingRequest withAutoScalingSchedule(WeeklyAutoScalingSchedule autoScalingSchedule) {
        this.autoScalingSchedule = autoScalingSchedule;
        return this;
    }
    @JsonProperty("InstanceId")
    public String instanceId;
    public SetTimeBasedAutoScalingRequest withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
}