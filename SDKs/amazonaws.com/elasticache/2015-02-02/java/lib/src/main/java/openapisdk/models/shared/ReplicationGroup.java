package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * ReplicationGroup
 * Contains all of the attributes of a specific Redis replication group.
**/
public class ReplicationGroup {
    public String arn;
    public ReplicationGroup withArn(String arn) {
        this.arn = arn;
        return this;
    }
    public Boolean atRestEncryptionEnabled;
    public ReplicationGroup withAtRestEncryptionEnabled(Boolean atRestEncryptionEnabled) {
        this.atRestEncryptionEnabled = atRestEncryptionEnabled;
        return this;
    }
    public Boolean authTokenEnabled;
    public ReplicationGroup withAuthTokenEnabled(Boolean authTokenEnabled) {
        this.authTokenEnabled = authTokenEnabled;
        return this;
    }
    public OffsetDateTime authTokenLastModifiedDate;
    public ReplicationGroup withAuthTokenLastModifiedDate(OffsetDateTime authTokenLastModifiedDate) {
        this.authTokenLastModifiedDate = authTokenLastModifiedDate;
        return this;
    }
    public AutomaticFailoverStatusEnum automaticFailover;
    public ReplicationGroup withAutomaticFailover(AutomaticFailoverStatusEnum automaticFailover) {
        this.automaticFailover = automaticFailover;
        return this;
    }
    public String cacheNodeType;
    public ReplicationGroup withCacheNodeType(String cacheNodeType) {
        this.cacheNodeType = cacheNodeType;
        return this;
    }
    public Boolean clusterEnabled;
    public ReplicationGroup withClusterEnabled(Boolean clusterEnabled) {
        this.clusterEnabled = clusterEnabled;
        return this;
    }
    public Endpoint configurationEndpoint;
    public ReplicationGroup withConfigurationEndpoint(Endpoint configurationEndpoint) {
        this.configurationEndpoint = configurationEndpoint;
        return this;
    }
    public String description;
    public ReplicationGroup withDescription(String description) {
        this.description = description;
        return this;
    }
    public GlobalReplicationGroupInfo globalReplicationGroupInfo;
    public ReplicationGroup withGlobalReplicationGroupInfo(GlobalReplicationGroupInfo globalReplicationGroupInfo) {
        this.globalReplicationGroupInfo = globalReplicationGroupInfo;
        return this;
    }
    public String kmsKeyId;
    public ReplicationGroup withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    public LogDeliveryConfigurationList[] logDeliveryConfigurations;
    public ReplicationGroup withLogDeliveryConfigurations(LogDeliveryConfigurationList[] logDeliveryConfigurations) {
        this.logDeliveryConfigurations = logDeliveryConfigurations;
        return this;
    }
    public java.util.Map<String, Object>[] memberClusters;
    public ReplicationGroup withMemberClusters(java.util.Map<String, Object>[] memberClusters) {
        this.memberClusters = memberClusters;
        return this;
    }
    public java.util.Map<String, Object>[] memberClustersOutpostArns;
    public ReplicationGroup withMemberClustersOutpostArns(java.util.Map<String, Object>[] memberClustersOutpostArns) {
        this.memberClustersOutpostArns = memberClustersOutpostArns;
        return this;
    }
    public MultiAzStatusEnum multiAZ;
    public ReplicationGroup withMultiAz(MultiAzStatusEnum multiAZ) {
        this.multiAZ = multiAZ;
        return this;
    }
    public NodeGroupList[] nodeGroups;
    public ReplicationGroup withNodeGroups(NodeGroupList[] nodeGroups) {
        this.nodeGroups = nodeGroups;
        return this;
    }
    public ReplicationGroupPendingModifiedValues pendingModifiedValues;
    public ReplicationGroup withPendingModifiedValues(ReplicationGroupPendingModifiedValues pendingModifiedValues) {
        this.pendingModifiedValues = pendingModifiedValues;
        return this;
    }
    public OffsetDateTime replicationGroupCreateTime;
    public ReplicationGroup withReplicationGroupCreateTime(OffsetDateTime replicationGroupCreateTime) {
        this.replicationGroupCreateTime = replicationGroupCreateTime;
        return this;
    }
    public String replicationGroupId;
    public ReplicationGroup withReplicationGroupId(String replicationGroupId) {
        this.replicationGroupId = replicationGroupId;
        return this;
    }
    public Long snapshotRetentionLimit;
    public ReplicationGroup withSnapshotRetentionLimit(Long snapshotRetentionLimit) {
        this.snapshotRetentionLimit = snapshotRetentionLimit;
        return this;
    }
    public String snapshotWindow;
    public ReplicationGroup withSnapshotWindow(String snapshotWindow) {
        this.snapshotWindow = snapshotWindow;
        return this;
    }
    public String snapshottingClusterId;
    public ReplicationGroup withSnapshottingClusterId(String snapshottingClusterId) {
        this.snapshottingClusterId = snapshottingClusterId;
        return this;
    }
    public String status;
    public ReplicationGroup withStatus(String status) {
        this.status = status;
        return this;
    }
    public Boolean transitEncryptionEnabled;
    public ReplicationGroup withTransitEncryptionEnabled(Boolean transitEncryptionEnabled) {
        this.transitEncryptionEnabled = transitEncryptionEnabled;
        return this;
    }
    public String[] userGroupIds;
    public ReplicationGroup withUserGroupIds(String[] userGroupIds) {
        this.userGroupIds = userGroupIds;
        return this;
    }
}