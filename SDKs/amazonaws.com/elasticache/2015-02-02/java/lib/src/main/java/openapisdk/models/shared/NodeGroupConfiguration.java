package openapisdk.models.shared;



/**
 * NodeGroupConfiguration
 * Node group (shard) configuration options. Each node group (shard) configuration has the following: <code>Slots</code>, <code>PrimaryAvailabilityZone</code>, <code>ReplicaAvailabilityZones</code>, <code>ReplicaCount</code>.
**/
public class NodeGroupConfiguration {
    public String nodeGroupId;
    public NodeGroupConfiguration withNodeGroupId(String nodeGroupId) {
        this.nodeGroupId = nodeGroupId;
        return this;
    }
    public String primaryAvailabilityZone;
    public NodeGroupConfiguration withPrimaryAvailabilityZone(String primaryAvailabilityZone) {
        this.primaryAvailabilityZone = primaryAvailabilityZone;
        return this;
    }
    public String primaryOutpostArn;
    public NodeGroupConfiguration withPrimaryOutpostArn(String primaryOutpostArn) {
        this.primaryOutpostArn = primaryOutpostArn;
        return this;
    }
    public java.util.Map<String, Object>[] replicaAvailabilityZones;
    public NodeGroupConfiguration withReplicaAvailabilityZones(java.util.Map<String, Object>[] replicaAvailabilityZones) {
        this.replicaAvailabilityZones = replicaAvailabilityZones;
        return this;
    }
    public Long replicaCount;
    public NodeGroupConfiguration withReplicaCount(Long replicaCount) {
        this.replicaCount = replicaCount;
        return this;
    }
    public java.util.Map<String, Object>[] replicaOutpostArns;
    public NodeGroupConfiguration withReplicaOutpostArns(java.util.Map<String, Object>[] replicaOutpostArns) {
        this.replicaOutpostArns = replicaOutpostArns;
        return this;
    }
    public String slots;
    public NodeGroupConfiguration withSlots(String slots) {
        this.slots = slots;
        return this;
    }
}