package openapisdk.models.shared;



/**
 * Volume
 * Describes a volume.
**/
public class Volume {
    public java.util.Map<String, Object> attachments;
    public Volume withAttachments(java.util.Map<String, Object> attachments) {
        this.attachments = attachments;
        return this;
    }
    public java.util.Map<String, Object> availabilityZone;
    public Volume withAvailabilityZone(java.util.Map<String, Object> availabilityZone) {
        this.availabilityZone = availabilityZone;
        return this;
    }
    public java.util.Map<String, Object> createTime;
    public Volume withCreateTime(java.util.Map<String, Object> createTime) {
        this.createTime = createTime;
        return this;
    }
    public java.util.Map<String, Object> encrypted;
    public Volume withEncrypted(java.util.Map<String, Object> encrypted) {
        this.encrypted = encrypted;
        return this;
    }
    public java.util.Map<String, Object> fastRestored;
    public Volume withFastRestored(java.util.Map<String, Object> fastRestored) {
        this.fastRestored = fastRestored;
        return this;
    }
    public java.util.Map<String, Object> iops;
    public Volume withIops(java.util.Map<String, Object> iops) {
        this.iops = iops;
        return this;
    }
    public java.util.Map<String, Object> kmsKeyId;
    public Volume withKmsKeyId(java.util.Map<String, Object> kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    public java.util.Map<String, Object> multiAttachEnabled;
    public Volume withMultiAttachEnabled(java.util.Map<String, Object> multiAttachEnabled) {
        this.multiAttachEnabled = multiAttachEnabled;
        return this;
    }
    public java.util.Map<String, Object> outpostArn;
    public Volume withOutpostArn(java.util.Map<String, Object> outpostArn) {
        this.outpostArn = outpostArn;
        return this;
    }
    public java.util.Map<String, Object> size;
    public Volume withSize(java.util.Map<String, Object> size) {
        this.size = size;
        return this;
    }
    public java.util.Map<String, Object> snapshotId;
    public Volume withSnapshotId(java.util.Map<String, Object> snapshotId) {
        this.snapshotId = snapshotId;
        return this;
    }
    public java.util.Map<String, Object> state;
    public Volume withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public Volume withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> throughput;
    public Volume withThroughput(java.util.Map<String, Object> throughput) {
        this.throughput = throughput;
        return this;
    }
    public java.util.Map<String, Object> volumeId;
    public Volume withVolumeId(java.util.Map<String, Object> volumeId) {
        this.volumeId = volumeId;
        return this;
    }
    public java.util.Map<String, Object> volumeType;
    public Volume withVolumeType(java.util.Map<String, Object> volumeType) {
        this.volumeType = volumeType;
        return this;
    }
}