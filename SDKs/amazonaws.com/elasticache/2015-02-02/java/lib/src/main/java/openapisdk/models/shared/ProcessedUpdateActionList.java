package openapisdk.models.shared;



/**
 * ProcessedUpdateActionList
 * Update action that has been processed for the corresponding apply/stop request
**/
public class ProcessedUpdateActionList {
    public String cacheClusterId;
    public ProcessedUpdateActionList withCacheClusterId(String cacheClusterId) {
        this.cacheClusterId = cacheClusterId;
        return this;
    }
    public String replicationGroupId;
    public ProcessedUpdateActionList withReplicationGroupId(String replicationGroupId) {
        this.replicationGroupId = replicationGroupId;
        return this;
    }
    public String serviceUpdateName;
    public ProcessedUpdateActionList withServiceUpdateName(String serviceUpdateName) {
        this.serviceUpdateName = serviceUpdateName;
        return this;
    }
    public UpdateActionStatusEnum updateActionStatus;
    public ProcessedUpdateActionList withUpdateActionStatus(UpdateActionStatusEnum updateActionStatus) {
        this.updateActionStatus = updateActionStatus;
        return this;
    }
}