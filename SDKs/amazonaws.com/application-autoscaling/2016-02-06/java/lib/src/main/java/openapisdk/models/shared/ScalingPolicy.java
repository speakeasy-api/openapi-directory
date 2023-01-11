package openapisdk.models.shared;

import java.time.OffsetDateTime;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import com.fasterxml.jackson.databind.annotation.JsonDeserialize;
import openapisdk.utils.DateTimeSerializer;
import openapisdk.utils.DateTimeDeserializer;

/**
 * ScalingPolicy
 * <p>Represents a scaling policy to use with Application Auto Scaling.</p> <p>For more information about configuring scaling policies for a specific service, see <a href="https://docs.aws.amazon.com/autoscaling/application/userguide/getting-started.html">Getting started with Application Auto Scaling</a> in the <i>Application Auto Scaling User Guide</i>.</p>
**/
public class ScalingPolicy {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Alarms")
    public Alarm[] alarms;
    public ScalingPolicy withAlarms(Alarm[] alarms) {
        this.alarms = alarms;
        return this;
    }
    @JsonSerialize(using = DateTimeSerializer.class)
    @JsonDeserialize(using = DateTimeDeserializer.class)
    @JsonProperty("CreationTime")
    public OffsetDateTime creationTime;
    public ScalingPolicy withCreationTime(OffsetDateTime creationTime) {
        this.creationTime = creationTime;
        return this;
    }
    @JsonProperty("PolicyARN")
    public String policyARN;
    public ScalingPolicy withPolicyArn(String policyARN) {
        this.policyARN = policyARN;
        return this;
    }
    @JsonProperty("PolicyName")
    public String policyName;
    public ScalingPolicy withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
    @JsonProperty("PolicyType")
    public PolicyTypeEnum policyType;
    public ScalingPolicy withPolicyType(PolicyTypeEnum policyType) {
        this.policyType = policyType;
        return this;
    }
    @JsonProperty("ResourceId")
    public String resourceId;
    public ScalingPolicy withResourceId(String resourceId) {
        this.resourceId = resourceId;
        return this;
    }
    @JsonProperty("ScalableDimension")
    public ScalableDimensionEnum scalableDimension;
    public ScalingPolicy withScalableDimension(ScalableDimensionEnum scalableDimension) {
        this.scalableDimension = scalableDimension;
        return this;
    }
    @JsonProperty("ServiceNamespace")
    public ServiceNamespaceEnum serviceNamespace;
    public ScalingPolicy withServiceNamespace(ServiceNamespaceEnum serviceNamespace) {
        this.serviceNamespace = serviceNamespace;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("StepScalingPolicyConfiguration")
    public StepScalingPolicyConfiguration stepScalingPolicyConfiguration;
    public ScalingPolicy withStepScalingPolicyConfiguration(StepScalingPolicyConfiguration stepScalingPolicyConfiguration) {
        this.stepScalingPolicyConfiguration = stepScalingPolicyConfiguration;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("TargetTrackingScalingPolicyConfiguration")
    public TargetTrackingScalingPolicyConfiguration targetTrackingScalingPolicyConfiguration;
    public ScalingPolicy withTargetTrackingScalingPolicyConfiguration(TargetTrackingScalingPolicyConfiguration targetTrackingScalingPolicyConfiguration) {
        this.targetTrackingScalingPolicyConfiguration = targetTrackingScalingPolicyConfiguration;
        return this;
    }
}