package openapisdk.models.shared;

import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonInclude.Include;

/**
 * AwsEc2VolumeDetails
 * Details about an EC2 volume.
**/
public class AwsEc2VolumeDetails {
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Attachments")
    public AwsEc2VolumeAttachment[] attachments;
    public AwsEc2VolumeDetails withAttachments(AwsEc2VolumeAttachment[] attachments) {
        this.attachments = attachments;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("CreateTime")
    public String createTime;
    public AwsEc2VolumeDetails withCreateTime(String createTime) {
        this.createTime = createTime;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Encrypted")
    public Boolean encrypted;
    public AwsEc2VolumeDetails withEncrypted(Boolean encrypted) {
        this.encrypted = encrypted;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("KmsKeyId")
    public String kmsKeyId;
    public AwsEc2VolumeDetails withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Size")
    public Long size;
    public AwsEc2VolumeDetails withSize(Long size) {
        this.size = size;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("SnapshotId")
    public String snapshotId;
    public AwsEc2VolumeDetails withSnapshotId(String snapshotId) {
        this.snapshotId = snapshotId;
        return this;
    }
    @JsonInclude(Include.NON_ABSENT)
    @JsonProperty("Status")
    public String status;
    public AwsEc2VolumeDetails withStatus(String status) {
        this.status = status;
        return this;
    }
}