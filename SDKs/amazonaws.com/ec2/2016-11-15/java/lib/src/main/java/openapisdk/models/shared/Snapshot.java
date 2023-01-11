package openapisdk.models.shared;



/**
 * Snapshot
 * Describes a snapshot.
**/
public class Snapshot {
    public java.util.Map<String, Object> dataEncryptionKeyId;
    public Snapshot withDataEncryptionKeyId(java.util.Map<String, Object> dataEncryptionKeyId) {
        this.dataEncryptionKeyId = dataEncryptionKeyId;
        return this;
    }
    public java.util.Map<String, Object> description;
    public Snapshot withDescription(java.util.Map<String, Object> description) {
        this.description = description;
        return this;
    }
    public java.util.Map<String, Object> encrypted;
    public Snapshot withEncrypted(java.util.Map<String, Object> encrypted) {
        this.encrypted = encrypted;
        return this;
    }
    public java.util.Map<String, Object> kmsKeyId;
    public Snapshot withKmsKeyId(java.util.Map<String, Object> kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    public java.util.Map<String, Object> outpostArn;
    public Snapshot withOutpostArn(java.util.Map<String, Object> outpostArn) {
        this.outpostArn = outpostArn;
        return this;
    }
    public java.util.Map<String, Object> ownerAlias;
    public Snapshot withOwnerAlias(java.util.Map<String, Object> ownerAlias) {
        this.ownerAlias = ownerAlias;
        return this;
    }
    public java.util.Map<String, Object> ownerId;
    public Snapshot withOwnerId(java.util.Map<String, Object> ownerId) {
        this.ownerId = ownerId;
        return this;
    }
    public java.util.Map<String, Object> progress;
    public Snapshot withProgress(java.util.Map<String, Object> progress) {
        this.progress = progress;
        return this;
    }
    public java.util.Map<String, Object> snapshotId;
    public Snapshot withSnapshotId(java.util.Map<String, Object> snapshotId) {
        this.snapshotId = snapshotId;
        return this;
    }
    public java.util.Map<String, Object> startTime;
    public Snapshot withStartTime(java.util.Map<String, Object> startTime) {
        this.startTime = startTime;
        return this;
    }
    public java.util.Map<String, Object> state;
    public Snapshot withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> stateMessage;
    public Snapshot withStateMessage(java.util.Map<String, Object> stateMessage) {
        this.stateMessage = stateMessage;
        return this;
    }
    public java.util.Map<String, Object> tags;
    public Snapshot withTags(java.util.Map<String, Object> tags) {
        this.tags = tags;
        return this;
    }
    public java.util.Map<String, Object> volumeId;
    public Snapshot withVolumeId(java.util.Map<String, Object> volumeId) {
        this.volumeId = volumeId;
        return this;
    }
    public java.util.Map<String, Object> volumeSize;
    public Snapshot withVolumeSize(java.util.Map<String, Object> volumeSize) {
        this.volumeSize = volumeSize;
        return this;
    }
}