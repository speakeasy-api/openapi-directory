package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * NodeSnapshotList
 * Represents an individual cache node in a snapshot of a cluster.
**/
public class NodeSnapshotList {
    public String cacheClusterId;
    public NodeSnapshotList withCacheClusterId(String cacheClusterId) {
        this.cacheClusterId = cacheClusterId;
        return this;
    }
    public OffsetDateTime cacheNodeCreateTime;
    public NodeSnapshotList withCacheNodeCreateTime(OffsetDateTime cacheNodeCreateTime) {
        this.cacheNodeCreateTime = cacheNodeCreateTime;
        return this;
    }
    public String cacheNodeId;
    public NodeSnapshotList withCacheNodeId(String cacheNodeId) {
        this.cacheNodeId = cacheNodeId;
        return this;
    }
    public String cacheSize;
    public NodeSnapshotList withCacheSize(String cacheSize) {
        this.cacheSize = cacheSize;
        return this;
    }
    public NodeGroupConfiguration nodeGroupConfiguration;
    public NodeSnapshotList withNodeGroupConfiguration(NodeGroupConfiguration nodeGroupConfiguration) {
        this.nodeGroupConfiguration = nodeGroupConfiguration;
        return this;
    }
    public String nodeGroupId;
    public NodeSnapshotList withNodeGroupId(String nodeGroupId) {
        this.nodeGroupId = nodeGroupId;
        return this;
    }
    public OffsetDateTime snapshotCreateTime;
    public NodeSnapshotList withSnapshotCreateTime(OffsetDateTime snapshotCreateTime) {
        this.snapshotCreateTime = snapshotCreateTime;
        return this;
    }
}