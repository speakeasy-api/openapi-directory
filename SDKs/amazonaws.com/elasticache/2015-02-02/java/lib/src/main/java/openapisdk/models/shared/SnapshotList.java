package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * SnapshotList
 * Represents a copy of an entire Redis cluster as of the time when the snapshot was taken.
**/
public class SnapshotList {
    public String arn;
    public SnapshotList withArn(String arn) {
        this.arn = arn;
        return this;
    }
    public Boolean autoMinorVersionUpgrade;
    public SnapshotList withAutoMinorVersionUpgrade(Boolean autoMinorVersionUpgrade) {
        this.autoMinorVersionUpgrade = autoMinorVersionUpgrade;
        return this;
    }
    public AutomaticFailoverStatusEnum automaticFailover;
    public SnapshotList withAutomaticFailover(AutomaticFailoverStatusEnum automaticFailover) {
        this.automaticFailover = automaticFailover;
        return this;
    }
    public OffsetDateTime cacheClusterCreateTime;
    public SnapshotList withCacheClusterCreateTime(OffsetDateTime cacheClusterCreateTime) {
        this.cacheClusterCreateTime = cacheClusterCreateTime;
        return this;
    }
    public String cacheClusterId;
    public SnapshotList withCacheClusterId(String cacheClusterId) {
        this.cacheClusterId = cacheClusterId;
        return this;
    }
    public String cacheNodeType;
    public SnapshotList withCacheNodeType(String cacheNodeType) {
        this.cacheNodeType = cacheNodeType;
        return this;
    }
    public String cacheParameterGroupName;
    public SnapshotList withCacheParameterGroupName(String cacheParameterGroupName) {
        this.cacheParameterGroupName = cacheParameterGroupName;
        return this;
    }
    public String cacheSubnetGroupName;
    public SnapshotList withCacheSubnetGroupName(String cacheSubnetGroupName) {
        this.cacheSubnetGroupName = cacheSubnetGroupName;
        return this;
    }
    public String engine;
    public SnapshotList withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    public String engineVersion;
    public SnapshotList withEngineVersion(String engineVersion) {
        this.engineVersion = engineVersion;
        return this;
    }
    public String kmsKeyId;
    public SnapshotList withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    public NodeSnapshotList[] nodeSnapshots;
    public SnapshotList withNodeSnapshots(NodeSnapshotList[] nodeSnapshots) {
        this.nodeSnapshots = nodeSnapshots;
        return this;
    }
    public Long numCacheNodes;
    public SnapshotList withNumCacheNodes(Long numCacheNodes) {
        this.numCacheNodes = numCacheNodes;
        return this;
    }
    public Long numNodeGroups;
    public SnapshotList withNumNodeGroups(Long numNodeGroups) {
        this.numNodeGroups = numNodeGroups;
        return this;
    }
    public Long port;
    public SnapshotList withPort(Long port) {
        this.port = port;
        return this;
    }
    public String preferredAvailabilityZone;
    public SnapshotList withPreferredAvailabilityZone(String preferredAvailabilityZone) {
        this.preferredAvailabilityZone = preferredAvailabilityZone;
        return this;
    }
    public String preferredMaintenanceWindow;
    public SnapshotList withPreferredMaintenanceWindow(String preferredMaintenanceWindow) {
        this.preferredMaintenanceWindow = preferredMaintenanceWindow;
        return this;
    }
    public String preferredOutpostArn;
    public SnapshotList withPreferredOutpostArn(String preferredOutpostArn) {
        this.preferredOutpostArn = preferredOutpostArn;
        return this;
    }
    public String replicationGroupDescription;
    public SnapshotList withReplicationGroupDescription(String replicationGroupDescription) {
        this.replicationGroupDescription = replicationGroupDescription;
        return this;
    }
    public String replicationGroupId;
    public SnapshotList withReplicationGroupId(String replicationGroupId) {
        this.replicationGroupId = replicationGroupId;
        return this;
    }
    public String snapshotName;
    public SnapshotList withSnapshotName(String snapshotName) {
        this.snapshotName = snapshotName;
        return this;
    }
    public Long snapshotRetentionLimit;
    public SnapshotList withSnapshotRetentionLimit(Long snapshotRetentionLimit) {
        this.snapshotRetentionLimit = snapshotRetentionLimit;
        return this;
    }
    public String snapshotSource;
    public SnapshotList withSnapshotSource(String snapshotSource) {
        this.snapshotSource = snapshotSource;
        return this;
    }
    public String snapshotStatus;
    public SnapshotList withSnapshotStatus(String snapshotStatus) {
        this.snapshotStatus = snapshotStatus;
        return this;
    }
    public String snapshotWindow;
    public SnapshotList withSnapshotWindow(String snapshotWindow) {
        this.snapshotWindow = snapshotWindow;
        return this;
    }
    public String topicArn;
    public SnapshotList withTopicArn(String topicArn) {
        this.topicArn = topicArn;
        return this;
    }
    public String vpcId;
    public SnapshotList withVpcId(String vpcId) {
        this.vpcId = vpcId;
        return this;
    }
}