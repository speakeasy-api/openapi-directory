package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * ScalingPolicy
 * <p>Rule that controls how a fleet is scaled. Scaling policies are uniquely identified by the combination of name and fleet ID.</p> <p> <b>Related actions</b> </p> <p> <a>DescribeFleetCapacity</a> | <a>UpdateFleetCapacity</a> | <a>DescribeEC2InstanceLimits</a> | <a>PutScalingPolicy</a> | <a>DescribeScalingPolicies</a> | <a>DeleteScalingPolicy</a> | <a>StopFleetActions</a> | <a>StartFleetActions</a> | <a href="https://docs.aws.amazon.com/gamelift/latest/developerguide/reference-awssdk.html#reference-awssdk-resources-fleets">All APIs by task</a> </p>
**/
public class ScalingPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ComparisonOperator")
    public ComparisonOperatorTypeEnum comparisonOperator;
    public ScalingPolicy withComparisonOperator(ComparisonOperatorTypeEnum comparisonOperator) {
        this.comparisonOperator = comparisonOperator;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EvaluationPeriods")
    public Long evaluationPeriods;
    public ScalingPolicy withEvaluationPeriods(Long evaluationPeriods) {
        this.evaluationPeriods = evaluationPeriods;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FleetArn")
    public String fleetArn;
    public ScalingPolicy withFleetArn(String fleetArn) {
        this.fleetArn = fleetArn;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("FleetId")
    public String fleetId;
    public ScalingPolicy withFleetId(String fleetId) {
        this.fleetId = fleetId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Location")
    public String location;
    public ScalingPolicy withLocation(String location) {
        this.location = location;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("MetricName")
    public MetricNameEnum metricName;
    public ScalingPolicy withMetricName(MetricNameEnum metricName) {
        this.metricName = metricName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Name")
    public String name;
    public ScalingPolicy withName(String name) {
        this.name = name;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PolicyType")
    public PolicyTypeEnum policyType;
    public ScalingPolicy withPolicyType(PolicyTypeEnum policyType) {
        this.policyType = policyType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScalingAdjustment")
    public Long scalingAdjustment;
    public ScalingPolicy withScalingAdjustment(Long scalingAdjustment) {
        this.scalingAdjustment = scalingAdjustment;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ScalingAdjustmentType")
    public ScalingAdjustmentTypeEnum scalingAdjustmentType;
    public ScalingPolicy withScalingAdjustmentType(ScalingAdjustmentTypeEnum scalingAdjustmentType) {
        this.scalingAdjustmentType = scalingAdjustmentType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public ScalingStatusTypeEnum status;
    public ScalingPolicy withStatus(ScalingStatusTypeEnum status) {
        this.status = status;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetConfiguration")
    public TargetConfiguration targetConfiguration;
    public ScalingPolicy withTargetConfiguration(TargetConfiguration targetConfiguration) {
        this.targetConfiguration = targetConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Threshold")
    public Double threshold;
    public ScalingPolicy withThreshold(Double threshold) {
        this.threshold = threshold;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UpdateStatus")
    public LocationUpdateStatusEnum updateStatus;
    public ScalingPolicy withUpdateStatus(LocationUpdateStatusEnum updateStatus) {
        this.updateStatus = updateStatus;
        return this;
    }
}