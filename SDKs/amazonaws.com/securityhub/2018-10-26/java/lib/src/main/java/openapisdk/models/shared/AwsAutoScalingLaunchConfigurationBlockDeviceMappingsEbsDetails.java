package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails
 * Parameters that are used to automatically set up EBS volumes when an instance is launched.
**/
public class AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeleteOnTermination")
    public Boolean deleteOnTermination;
    public AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails withDeleteOnTermination(Boolean deleteOnTermination) {
        this.deleteOnTermination = deleteOnTermination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Encrypted")
    public Boolean encrypted;
    public AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails withEncrypted(Boolean encrypted) {
        this.encrypted = encrypted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Iops")
    public Long iops;
    public AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails withIops(Long iops) {
        this.iops = iops;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SnapshotId")
    public String snapshotId;
    public AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails withSnapshotId(String snapshotId) {
        this.snapshotId = snapshotId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VolumeSize")
    public Long volumeSize;
    public AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails withVolumeSize(Long volumeSize) {
        this.volumeSize = volumeSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VolumeType")
    public String volumeType;
    public AwsAutoScalingLaunchConfigurationBlockDeviceMappingsEbsDetails withVolumeType(String volumeType) {
        this.volumeType = volumeType;
        return this;
    }
}