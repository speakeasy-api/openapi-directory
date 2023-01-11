package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ManagedScaling
 * <p>The managed scaling settings for the Auto Scaling group capacity provider.</p> <p>When managed scaling is enabled, Amazon ECS manages the scale-in and scale-out actions of the Auto Scaling group. Amazon ECS manages a target tracking scaling policy using an Amazon ECS-managed CloudWatch metric with the specified <code>targetCapacity</code> value as the target value for the metric. For more information, see <a href="https://docs.aws.amazon.com/AmazonECS/latest/developerguide/asg-capacity-providers.html#asg-capacity-providers-managed-scaling">Using Managed Scaling</a> in the <i>Amazon Elastic Container Service Developer Guide</i>.</p> <p>If managed scaling is disabled, the user must manage the scaling of the Auto Scaling group.</p>
**/
public class ManagedScaling {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("instanceWarmupPeriod")
    public Long instanceWarmupPeriod;
    public ManagedScaling withInstanceWarmupPeriod(Long instanceWarmupPeriod) {
        this.instanceWarmupPeriod = instanceWarmupPeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("maximumScalingStepSize")
    public Long maximumScalingStepSize;
    public ManagedScaling withMaximumScalingStepSize(Long maximumScalingStepSize) {
        this.maximumScalingStepSize = maximumScalingStepSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("minimumScalingStepSize")
    public Long minimumScalingStepSize;
    public ManagedScaling withMinimumScalingStepSize(Long minimumScalingStepSize) {
        this.minimumScalingStepSize = minimumScalingStepSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("status")
    public ManagedScalingStatusEnum status;
    public ManagedScaling withStatus(ManagedScalingStatusEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("targetCapacity")
    public Long targetCapacity;
    public ManagedScaling withTargetCapacity(Long targetCapacity) {
        this.targetCapacity = targetCapacity;
        return this;
    }
}