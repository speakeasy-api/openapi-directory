package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * EbsBlockDevice
 * Describes an Amazon EBS volume. This data type maps directly to the Amazon EC2 <a href="https://docs.aws.amazon.com/AWSEC2/latest/APIReference/API_EbsBlockDevice.html">EbsBlockDevice</a> data type.
**/
public class EbsBlockDevice {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("DeleteOnTermination")
    public Boolean deleteOnTermination;
    public EbsBlockDevice withDeleteOnTermination(Boolean deleteOnTermination) {
        this.deleteOnTermination = deleteOnTermination;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Iops")
    public Long iops;
    public EbsBlockDevice withIops(Long iops) {
        this.iops = iops;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SnapshotId")
    public String snapshotId;
    public EbsBlockDevice withSnapshotId(String snapshotId) {
        this.snapshotId = snapshotId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VolumeSize")
    public Long volumeSize;
    public EbsBlockDevice withVolumeSize(Long volumeSize) {
        this.volumeSize = volumeSize;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("VolumeType")
    public VolumeTypeEnum volumeType;
    public EbsBlockDevice withVolumeType(VolumeTypeEnum volumeType) {
        this.volumeType = volumeType;
        return this;
    }
}