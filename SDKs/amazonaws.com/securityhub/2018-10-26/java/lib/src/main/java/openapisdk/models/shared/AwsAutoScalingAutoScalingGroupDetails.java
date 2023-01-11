package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsAutoScalingAutoScalingGroupDetails
 * Provides details about an auto scaling group.
**/
public class AwsAutoScalingAutoScalingGroupDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedTime")
    public String createdTime;
    public AwsAutoScalingAutoScalingGroupDetails withCreatedTime(String createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HealthCheckGracePeriod")
    public Long healthCheckGracePeriod;
    public AwsAutoScalingAutoScalingGroupDetails withHealthCheckGracePeriod(Long healthCheckGracePeriod) {
        this.healthCheckGracePeriod = healthCheckGracePeriod;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("HealthCheckType")
    public String healthCheckType;
    public AwsAutoScalingAutoScalingGroupDetails withHealthCheckType(String healthCheckType) {
        this.healthCheckType = healthCheckType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LaunchConfigurationName")
    public String launchConfigurationName;
    public AwsAutoScalingAutoScalingGroupDetails withLaunchConfigurationName(String launchConfigurationName) {
        this.launchConfigurationName = launchConfigurationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LoadBalancerNames")
    public String[] loadBalancerNames;
    public AwsAutoScalingAutoScalingGroupDetails withLoadBalancerNames(String[] loadBalancerNames) {
        this.loadBalancerNames = loadBalancerNames;
        return this;
    }
}