package openapisdk.models.shared;



/**
 * Ebs
 * Describes information used to set up an Amazon EBS volume specified in a block device mapping.
**/
public class Ebs {
    public Boolean deleteOnTermination;
    public Ebs withDeleteOnTermination(Boolean deleteOnTermination) {
        this.deleteOnTermination = deleteOnTermination;
        return this;
    }
    public Boolean encrypted;
    public Ebs withEncrypted(Boolean encrypted) {
        this.encrypted = encrypted;
        return this;
    }
    public Long iops;
    public Ebs withIops(Long iops) {
        this.iops = iops;
        return this;
    }
    public String snapshotId;
    public Ebs withSnapshotId(String snapshotId) {
        this.snapshotId = snapshotId;
        return this;
    }
    public Long throughput;
    public Ebs withThroughput(Long throughput) {
        this.throughput = throughput;
        return this;
    }
    public Long volumeSize;
    public Ebs withVolumeSize(Long volumeSize) {
        this.volumeSize = volumeSize;
        return this;
    }
    public String volumeType;
    public Ebs withVolumeType(String volumeType) {
        this.volumeType = volumeType;
        return this;
    }
}