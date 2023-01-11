package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsAutoScalingLaunchConfigurationDetails
 * Details about a launch configuration.
**/
public class AwsAutoScalingLaunchConfigurationDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("AssociatePublicIpAddress")
    public Boolean associatePublicIpAddress;
    public AwsAutoScalingLaunchConfigurationDetails withAssociatePublicIpAddress(Boolean associatePublicIpAddress) {
        this.associatePublicIpAddress = associatePublicIpAddress;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("BlockDeviceMappings")
    public AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails[] blockDeviceMappings;
    public AwsAutoScalingLaunchConfigurationDetails withBlockDeviceMappings(AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails[] blockDeviceMappings) {
        this.blockDeviceMappings = blockDeviceMappings;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClassicLinkVpcId")
    public String classicLinkVpcId;
    public AwsAutoScalingLaunchConfigurationDetails withClassicLinkVpcId(String classicLinkVpcId) {
        this.classicLinkVpcId = classicLinkVpcId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ClassicLinkVpcSecurityGroups")
    public String[] classicLinkVpcSecurityGroups;
    public AwsAutoScalingLaunchConfigurationDetails withClassicLinkVpcSecurityGroups(String[] classicLinkVpcSecurityGroups) {
        this.classicLinkVpcSecurityGroups = classicLinkVpcSecurityGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreatedTime")
    public String createdTime;
    public AwsAutoScalingLaunchConfigurationDetails withCreatedTime(String createdTime) {
        this.createdTime = createdTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("EbsOptimized")
    public Boolean ebsOptimized;
    public AwsAutoScalingLaunchConfigurationDetails withEbsOptimized(Boolean ebsOptimized) {
        this.ebsOptimized = ebsOptimized;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("IamInstanceProfile")
    public String iamInstanceProfile;
    public AwsAutoScalingLaunchConfigurationDetails withIamInstanceProfile(String iamInstanceProfile) {
        this.iamInstanceProfile = iamInstanceProfile;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("ImageId")
    public String imageId;
    public AwsAutoScalingLaunchConfigurationDetails withImageId(String imageId) {
        this.imageId = imageId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstanceMonitoring")
    public AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails instanceMonitoring;
    public AwsAutoScalingLaunchConfigurationDetails withInstanceMonitoring(AwsAutoScalingLaunchConfigurationInstanceMonitoringDetails instanceMonitoring) {
        this.instanceMonitoring = instanceMonitoring;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("InstanceType")
    public String instanceType;
    public AwsAutoScalingLaunchConfigurationDetails withInstanceType(String instanceType) {
        this.instanceType = instanceType;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KernelId")
    public String kernelId;
    public AwsAutoScalingLaunchConfigurationDetails withKernelId(String kernelId) {
        this.kernelId = kernelId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KeyName")
    public String keyName;
    public AwsAutoScalingLaunchConfigurationDetails withKeyName(String keyName) {
        this.keyName = keyName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("LaunchConfigurationName")
    public String launchConfigurationName;
    public AwsAutoScalingLaunchConfigurationDetails withLaunchConfigurationName(String launchConfigurationName) {
        this.launchConfigurationName = launchConfigurationName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("PlacementTenancy")
    public String placementTenancy;
    public AwsAutoScalingLaunchConfigurationDetails withPlacementTenancy(String placementTenancy) {
        this.placementTenancy = placementTenancy;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("RamdiskId")
    public String ramdiskId;
    public AwsAutoScalingLaunchConfigurationDetails withRamdiskId(String ramdiskId) {
        this.ramdiskId = ramdiskId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SecurityGroups")
    public String[] securityGroups;
    public AwsAutoScalingLaunchConfigurationDetails withSecurityGroups(String[] securityGroups) {
        this.securityGroups = securityGroups;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SpotPrice")
    public String spotPrice;
    public AwsAutoScalingLaunchConfigurationDetails withSpotPrice(String spotPrice) {
        this.spotPrice = spotPrice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("UserData")
    public String userData;
    public AwsAutoScalingLaunchConfigurationDetails withUserData(String userData) {
        this.userData = userData;
        return this;
    }
}