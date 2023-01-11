package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * UpdateActionList
 * The status of the service update for a specific replication group
**/
public class UpdateActionList {
    public String cacheClusterId;
    public UpdateActionList withCacheClusterId(String cacheClusterId) {
        this.cacheClusterId = cacheClusterId;
        return this;
    }
    public CacheNodeUpdateStatusList[] cacheNodeUpdateStatus;
    public UpdateActionList withCacheNodeUpdateStatus(CacheNodeUpdateStatusList[] cacheNodeUpdateStatus) {
        this.cacheNodeUpdateStatus = cacheNodeUpdateStatus;
        return this;
    }
    public String engine;
    public UpdateActionList withEngine(String engine) {
        this.engine = engine;
        return this;
    }
    public String estimatedUpdateTime;
    public UpdateActionList withEstimatedUpdateTime(String estimatedUpdateTime) {
        this.estimatedUpdateTime = estimatedUpdateTime;
        return this;
    }
    public NodeGroupUpdateStatusList[] nodeGroupUpdateStatus;
    public UpdateActionList withNodeGroupUpdateStatus(NodeGroupUpdateStatusList[] nodeGroupUpdateStatus) {
        this.nodeGroupUpdateStatus = nodeGroupUpdateStatus;
        return this;
    }
    public String nodesUpdated;
    public UpdateActionList withNodesUpdated(String nodesUpdated) {
        this.nodesUpdated = nodesUpdated;
        return this;
    }
    public String replicationGroupId;
    public UpdateActionList withReplicationGroupId(String replicationGroupId) {
        this.replicationGroupId = replicationGroupId;
        return this;
    }
    public String serviceUpdateName;
    public UpdateActionList withServiceUpdateName(String serviceUpdateName) {
        this.serviceUpdateName = serviceUpdateName;
        return this;
    }
    public OffsetDateTime serviceUpdateRecommendedApplyByDate;
    public UpdateActionList withServiceUpdateRecommendedApplyByDate(OffsetDateTime serviceUpdateRecommendedApplyByDate) {
        this.serviceUpdateRecommendedApplyByDate = serviceUpdateRecommendedApplyByDate;
        return this;
    }
    public OffsetDateTime serviceUpdateReleaseDate;
    public UpdateActionList withServiceUpdateReleaseDate(OffsetDateTime serviceUpdateReleaseDate) {
        this.serviceUpdateReleaseDate = serviceUpdateReleaseDate;
        return this;
    }
    public ServiceUpdateSeverityEnum serviceUpdateSeverity;
    public UpdateActionList withServiceUpdateSeverity(ServiceUpdateSeverityEnum serviceUpdateSeverity) {
        this.serviceUpdateSeverity = serviceUpdateSeverity;
        return this;
    }
    public ServiceUpdateStatusEnum serviceUpdateStatus;
    public UpdateActionList withServiceUpdateStatus(ServiceUpdateStatusEnum serviceUpdateStatus) {
        this.serviceUpdateStatus = serviceUpdateStatus;
        return this;
    }
    public ServiceUpdateTypeEnum serviceUpdateType;
    public UpdateActionList withServiceUpdateType(ServiceUpdateTypeEnum serviceUpdateType) {
        this.serviceUpdateType = serviceUpdateType;
        return this;
    }
    public SlaMetEnum slaMet;
    public UpdateActionList withSlaMet(SlaMetEnum slaMet) {
        this.slaMet = slaMet;
        return this;
    }
    public OffsetDateTime updateActionAvailableDate;
    public UpdateActionList withUpdateActionAvailableDate(OffsetDateTime updateActionAvailableDate) {
        this.updateActionAvailableDate = updateActionAvailableDate;
        return this;
    }
    public UpdateActionStatusEnum updateActionStatus;
    public UpdateActionList withUpdateActionStatus(UpdateActionStatusEnum updateActionStatus) {
        this.updateActionStatus = updateActionStatus;
        return this;
    }
    public OffsetDateTime updateActionStatusModifiedDate;
    public UpdateActionList withUpdateActionStatusModifiedDate(OffsetDateTime updateActionStatusModifiedDate) {
        this.updateActionStatusModifiedDate = updateActionStatusModifiedDate;
        return this;
    }
}