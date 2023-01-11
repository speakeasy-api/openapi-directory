package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * ReplicationGroupList
 * Contains all of the attributes of a specific Redis replication group.
**/
public class ReplicationGroupList {
    public String arn;
    public ReplicationGroupList withArn(String arn) {
        this.arn = arn;
        return this;
    }
    public Boolean atRestEncryptionEnabled;
    public ReplicationGroupList withAtRestEncryptionEnabled(Boolean atRestEncryptionEnabled) {
        this.atRestEncryptionEnabled = atRestEncryptionEnabled;
        return this;
    }
    public Boolean authTokenEnabled;
    public ReplicationGroupList withAuthTokenEnabled(Boolean authTokenEnabled) {
        this.authTokenEnabled = authTokenEnabled;
        return this;
    }
    public OffsetDateTime authTokenLastModifiedDate;
    public ReplicationGroupList withAuthTokenLastModifiedDate(OffsetDateTime authTokenLastModifiedDate) {
        this.authTokenLastModifiedDate = authTokenLastModifiedDate;
        return this;
    }
    public AutomaticFailoverStatusEnum automaticFailover;
    public ReplicationGroupList withAutomaticFailover(AutomaticFailoverStatusEnum automaticFailover) {
        this.automaticFailover = automaticFailover;
        return this;
    }
    public String cacheNodeType;
    public ReplicationGroupList withCacheNodeType(String cacheNodeType) {
        this.cacheNodeType = cacheNodeType;
        return this;
    }
    public Boolean clusterEnabled;
    public ReplicationGroupList withClusterEnabled(Boolean clusterEnabled) {
        this.clusterEnabled = clusterEnabled;
        return this;
    }
    public Endpoint configurationEndpoint;
    public ReplicationGroupList withConfigurationEndpoint(Endpoint configurationEndpoint) {
        this.configurationEndpoint = configurationEndpoint;
        return this;
    }
    public String description;
    public ReplicationGroupList withDescription(String description) {
        this.description = description;
        return this;
    }
    public GlobalReplicationGroupInfo globalReplicationGroupInfo;
    public ReplicationGroupList withGlobalReplicationGroupInfo(GlobalReplicationGroupInfo globalReplicationGroupInfo) {
        this.globalReplicationGroupInfo = globalReplicationGroupInfo;
        return this;
    }
    public String kmsKeyId;
    public ReplicationGroupList withKmsKeyId(String kmsKeyId) {
        this.kmsKeyId = kmsKeyId;
        return this;
    }
    public LogDeliveryConfigurationList[] logDeliveryConfigurations;
    public ReplicationGroupList withLogDeliveryConfigurations(LogDeliveryConfigurationList[] logDeliveryConfigurations) {
        this.logDeliveryConfigurations = logDeliveryConfigurations;
        return this;
    }
    public java.util.Map<String, Object>[] memberClusters;
    public ReplicationGroupList withMemberClusters(java.util.Map<String, Object>[] memberClusters) {
        this.memberClusters = memberClusters;
        return this;
    }
    public java.util.Map<String, Object>[] memberClustersOutpostArns;
    public ReplicationGroupList withMemberClustersOutpostArns(java.util.Map<String, Object>[] memberClustersOutpostArns) {
        this.memberClustersOutpostArns = memberClustersOutpostArns;
        return this;
    }
    public MultiAzStatusEnum multiAZ;
    public ReplicationGroupList withMultiAz(MultiAzStatusEnum multiAZ) {
        this.multiAZ = multiAZ;
        return this;
    }
    public NodeGroupList[] nodeGroups;
    public ReplicationGroupList withNodeGroups(NodeGroupList[] nodeGroups) {
        this.nodeGroups = nodeGroups;
        return this;
    }
    public ReplicationGroupPendingModifiedValues pendingModifiedValues;
    public ReplicationGroupList withPendingModifiedValues(ReplicationGroupPendingModifiedValues pendingModifiedValues) {
        this.pendingModifiedValues = pendingModifiedValues;
        return this;
    }
    public OffsetDateTime replicationGroupCreateTime;
    public ReplicationGroupList withReplicationGroupCreateTime(OffsetDateTime replicationGroupCreateTime) {
        this.replicationGroupCreateTime = replicationGroupCreateTime;
        return this;
    }
    public String replicationGroupId;
    public ReplicationGroupList withReplicationGroupId(String replicationGroupId) {
        this.replicationGroupId = replicationGroupId;
        return this;
    }
    public Long snapshotRetentionLimit;
    public ReplicationGroupList withSnapshotRetentionLimit(Long snapshotRetentionLimit) {
        this.snapshotRetentionLimit = snapshotRetentionLimit;
        return this;
    }
    public String snapshotWindow;
    public ReplicationGroupList withSnapshotWindow(String snapshotWindow) {
        this.snapshotWindow = snapshotWindow;
        return this;
    }
    public String snapshottingClusterId;
    public ReplicationGroupList withSnapshottingClusterId(String snapshottingClusterId) {
        this.snapshottingClusterId = snapshottingClusterId;
        return this;
    }
    public String status;
    public ReplicationGroupList withStatus(String status) {
        this.status = status;
        return this;
    }
    public Boolean transitEncryptionEnabled;
    public ReplicationGroupList withTransitEncryptionEnabled(Boolean transitEncryptionEnabled) {
        this.transitEncryptionEnabled = transitEncryptionEnabled;
        return this;
    }
    public String[] userGroupIds;
    public ReplicationGroupList withUserGroupIds(String[] userGroupIds) {
        this.userGroupIds = userGroupIds;
        return this;
    }
}