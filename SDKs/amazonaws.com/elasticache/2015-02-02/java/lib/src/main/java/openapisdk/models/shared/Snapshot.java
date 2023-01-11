package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * Snapshot
 * Represents a copy of an entire Redis cluster as of the time when the snapshot was taken.
**/
public class Snapshot {
    public String arn;
    public Snapshot withArn(String arn) {
        this.arn = arn;
        return this;
    }
    public Boolean autoMinorVersionUpgrade;
    public Snapshot withAutoMinorVersionUpgrade(Boolean autoMinorVersionUpgrade) {
        this.autoMinorVersionUpgrade = autoMinorVersionUpgrade;
        return this;
    }
    public AutomaticFailoverStatusEnum automaticFailover;
    public Snapshot withAutomaticFailover(AutomaticFailoverStatusEnum automaticFailover) {
        this.automaticFailover = automaticFailover;
        return this;
    }
    public OffsetDateTime cacheClusterCreateTime;
    public Snapshot withCacheClusterCreateTime(OffsetDateTime cacheClusterCreateTime) {
        this.cacheClusterCreateTime = cacheClusterCreateTime;
        return this;
    }
    public String cacheClusterId;
    public Snapshot withCacheClusterId(String cacheClusterId) {
        this.cacheClusterId = cacheClusterId;
        return this;
    }
    public String cacheNodeType;
    public Snapshot withCacheNodeType(String cacheNodeType) {
        this.cacheNodeType = cacheNodeType;
        return this;
    }
    public String cacheParameterGroupName;
    public Snapshot withCacheParameterGroupName(String cacheParameterGroupName) {
        this.cacheParameterGroupName = cacheParameterGroupName;
        return this;
    }
    public String cacheSubnetGroupName;
    public Snapshot withCacheSubnetGroupName(String cacheSubnetGroupName) {
        this.cacheSubnetGroupName = cacheSubnetGroupName;
        return this;
    }
    public String engine;
    public Snapshot withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    public String engineVersion;
    public Snapshot withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    public String kmsKeyId;
    public Snapshot withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    public NodeSnapshotList[] nodeSnapshots;
    public Snapshot withNodeSnapshots(NodeSnapshotList[] nodeSnapshots) {
        this.nodeSnapshots = nodeSnapshots;
        return this;
    }
    public Long numCacheNodes;
    public Snapshot withNumCacheNodes(Long numCacheNodes) {
        this.numCacheNodes = numCacheNodes;
        return this;
    }
    public Long numNodeGroups;
    public Snapshot withNumNodeGroups(Long numNodeGroups) {
        this.numNodeGroups = numNodeGroups;
        return this;
    }
    public Long port;
    public Snapshot withPort(Long port) {
        this.port = port;
        return this;
    }
    public String preferredAvailabilityZone;
    public Snapshot withPreferredAvailabilityZone(String preferredAvailabilityZone) {
        this.preferredAvailabilityZone = preferredAvailabilityZone;
        return this;
    }
    public String preferredMaintenanceWindow;
    public Snapshot withPreferredMaintenanceWindow(String preferredMaintenanceWindow) {
        this.preferredMaintenanceWindow = preferredMaintenanceWindow;
        return this;
    }
    public String preferredOutpostArn;
    public Snapshot withPreferredOutpostArn(String preferredOutpostArn) {
        this.preferredOutpostArn = preferredOutpostArn;
        return this;
    }
    public String replicationGroupDescription;
    public Snapshot withReplicationGroupDescription(String replicationGroupDescription) {
        this.replicationGroupDescription = replicationGroupDescription;
        return this;
    }
    public String replicationGroupId;
    public Snapshot withReplicationGroupId(String replicationGroupId) {
        this.replicationGroupId = replicationGroupId;
        return this;
    }
    public String snapshotName;
    public Snapshot withSnapshotName(String snapshotName) {
        this.snapshotName = snapshotName;
        return this;
    }
    public Long snapshotRetentionLimit;
    public Snapshot withSnapshotRetentionLimit(Long snapshotRetentionLimit) {
        this.snapshotRetentionLimit = snapshotRetentionLimit;
        return this;
    }
    public String snapshotSource;
    public Snapshot withSnapshotSource(String snapshotSource) {
        this.snapshotSource = snapshotSource;
        return this;
    }
    public String snapshotStatus;
    public Snapshot withSnapshotStatus(String snapshotStatus) {
        this.snapshotStatus = snapshotStatus;
        return this;
    }
    public String snapshotWindow;
    public Snapshot withSnapshotWindow(String snapshotWindow) {
        this.snapshotWindow = snapshotWindow;
        return this;
    }
    public String topicArn;
    public Snapshot withTopicArn(String topicArn) {
        this.topicArn = topicArn;
        return this;
    }
    public String vpcId;
    public Snapshot withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}