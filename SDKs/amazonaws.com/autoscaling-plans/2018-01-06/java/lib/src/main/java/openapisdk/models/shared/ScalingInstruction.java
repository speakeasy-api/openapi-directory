package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScalingInstruction
 * <p>Describes a scaling instruction for a scalable resource in a scaling plan. Each scaling instruction applies to one resource.</p> <p>AWS Auto Scaling creates target tracking scaling policies based on the scaling instructions. Target tracking scaling policies adjust the capacity of your scalable resource as required to maintain resource utilization at the target value that you specified. </p> <p>AWS Auto Scaling also configures predictive scaling for your Amazon EC2 Auto Scaling groups using a subset of parameters, including the load metric, the scaling metric, the target value for the scaling metric, the predictive scaling mode (forecast and scale or forecast only), and the desired behavior when the forecast capacity exceeds the maximum capacity of the resource. With predictive scaling, AWS Auto Scaling generates forecasts with traffic predictions for the two days ahead and schedules scaling actions that proactively add and remove resource capacity to match the forecast. </p> <important> <p>We recommend waiting a minimum of 24 hours after creating an Auto Scaling group to configure predictive scaling. At minimum, there must be 24 hours of historical data to generate a forecast. For more information, see <a href="https://docs.aws.amazon.com/autoscaling/plans/userguide/gs-best-practices.html">Best Practices for AWS Auto Scaling</a> in the <i>AWS Auto Scaling User Guide</i>.</p> </important>
**/
public class ScalingInstruction {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CustomizedLoadMetricSpecification")
    public CustomizedLoadMetricSpecification customizedLoadMetricSpecification;
    public ScalingInstruction withCustomizedLoadMetricSpecification(CustomizedLoadMetricSpecification customizedLoadMetricSpecification) {
        this.customizedLoadMetricSpecification = customizedLoadMetricSpecification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DisableDynamicScaling")
    public Boolean disableDynamicScaling;
    public ScalingInstruction withDisableDynamicScaling(Boolean disableDynamicScaling) {
        this.disableDynamicScaling = disableDynamicScaling;
        return this;
    }
    @JsonProperty("MaxCapacity")
    public Long maxCapacity;
    public ScalingInstruction withMaxCapacity(Long maxCapacity) {
        this.maxCapacity = maxCapacity;
        return this;
    }
    @JsonProperty("MinCapacity")
    public Long minCapacity;
    public ScalingInstruction withMinCapacity(Long minCapacity) {
        this.minCapacity = minCapacity;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PredefinedLoadMetricSpecification")
    public PredefinedLoadMetricSpecification predefinedLoadMetricSpecification;
    public ScalingInstruction withPredefinedLoadMetricSpecification(PredefinedLoadMetricSpecification predefinedLoadMetricSpecification) {
        this.predefinedLoadMetricSpecification = predefinedLoadMetricSpecification;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PredictiveScalingMaxCapacityBehavior")
    public PredictiveScalingMaxCapacityBehaviorEnum predictiveScalingMaxCapacityBehavior;
    public ScalingInstruction withPredictiveScalingMaxCapacityBehavior(PredictiveScalingMaxCapacityBehaviorEnum predictiveScalingMaxCapacityBehavior) {
        this.predictiveScalingMaxCapacityBehavior = predictiveScalingMaxCapacityBehavior;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PredictiveScalingMaxCapacityBuffer")
    public Long predictiveScalingMaxCapacityBuffer;
    public ScalingInstruction withPredictiveScalingMaxCapacityBuffer(Long predictiveScalingMaxCapacityBuffer) {
        this.predictiveScalingMaxCapacityBuffer = predictiveScalingMaxCapacityBuffer;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PredictiveScalingMode")
    public PredictiveScalingModeEnum predictiveScalingMode;
    public ScalingInstruction withPredictiveScalingMode(PredictiveScalingModeEnum predictiveScalingMode) {
        this.predictiveScalingMode = predictiveScalingMode;
        return this;
    }
    @JsonProperty("ResourceId")
    public String resourceId;
    public ScalingInstruction withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonProperty("ScalableDimension")
    public ScalableDimensionEnum scalableDimension;
    public ScalingInstruction withScalableDimension(ScalableDimensionEnum scalableDimension) {
        this.scalableDimension = scalableDimension;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScalingPolicyUpdateBehavior")
    public ScalingPolicyUpdateBehaviorEnum scalingPolicyUpdateBehavior;
    public ScalingInstruction withScalingPolicyUpdateBehavior(ScalingPolicyUpdateBehaviorEnum scalingPolicyUpdateBehavior) {
        this.scalingPolicyUpdateBehavior = scalingPolicyUpdateBehavior;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScheduledActionBufferTime")
    public Long scheduledActionBufferTime;
    public ScalingInstruction withScheduledActionBufferTime(Long scheduledActionBufferTime) {
        this.scheduledActionBufferTime = scheduledActionBufferTime;
        return this;
    }
    @JsonProperty("ServiceNamespace")
    public ServiceNamespaceEnum serviceNamespace;
    public ScalingInstruction withServiceNamespace(ServiceNamespaceEnum serviceNamespace) {
        this.serviceNamespace = serviceNamespace;
        return this;
    }
    @JsonProperty("TargetTrackingConfigurations")
    public TargetTrackingConfiguration[] targetTrackingConfigurations;
    public ScalingInstruction withTargetTrackingConfigurations(TargetTrackingConfiguration[] targetTrackingConfigurations) {
        this.targetTrackingConfigurations = targetTrackingConfigurations;
        return this;
    }
}