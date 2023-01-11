package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails
 * A block device for the instance.
**/
public class AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeviceName")
    public String deviceName;
    public AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails withDeviceName(String deviceName) {
        this.deviceName = deviceName;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Ebs")
    public AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails ebs;
    public AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails withEbs(AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails ebs) {
        this.ebs = ebs;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("NoDevice")
    public Boolean noDevice;
    public AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails withNoDevice(Boolean noDevice) {
        this.noDevice = noDevice;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VirtualName")
    public String virtualName;
    public AwsAutoScalingLaunchConfigurationBlockDeviceMappingsDetails withVirtualName(String virtualName) {
        this.virtualName = virtualName;
        return this;
    }
}