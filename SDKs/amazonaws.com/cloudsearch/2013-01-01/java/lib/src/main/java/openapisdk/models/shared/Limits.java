package openapisdk.models.shared;



public class Limits {
    public Long maximumPartitionCount;
    public Limits withMaximumPartitionCount(Long maximumPartitionCount) {
        this.maximumPartitionCount = maximumPartitionCount;
        return this;
    }
    public Long maximumReplicationCount;
    public Limits withMaximumReplicationCount(Long maximumReplicationCount) {
        this.maximumReplicationCount = maximumReplicationCount;
        return this;
    }
}