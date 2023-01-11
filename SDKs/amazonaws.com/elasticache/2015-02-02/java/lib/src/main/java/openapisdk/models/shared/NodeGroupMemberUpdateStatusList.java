package openapisdk.models.shared;

import java.time.OffsetDateTime;

/**
 * NodeGroupMemberUpdateStatusList
 * The status of the service update on the node group member 
**/
public class NodeGroupMemberUpdateStatusList {
    public String cacheClusterId;
    public NodeGroupMemberUpdateStatusList withCacheClusterId(String cacheClusterId) {
        this.cacheClusterId = cacheClusterId;
        return this;
    }
    public String cacheNodeId;
    public NodeGroupMemberUpdateStatusList withCacheNodeId(String cacheNodeId) {
        this.cacheNodeId = cacheNodeId;
        return this;
    }
    public OffsetDateTime nodeDeletionDate;
    public NodeGroupMemberUpdateStatusList withNodeDeletionDate(OffsetDateTime nodeDeletionDate) {
        this.nodeDeletionDate = nodeDeletionDate;
        return this;
    }
    public OffsetDateTime nodeUpdateEndDate;
    public NodeGroupMemberUpdateStatusList withNodeUpdateEndDate(OffsetDateTime nodeUpdateEndDate) {
        this.nodeUpdateEndDate = nodeUpdateEndDate;
        return this;
    }
    public NodeUpdateInitiatedByEnum nodeUpdateInitiatedBy;
    public NodeGroupMemberUpdateStatusList withNodeUpdateInitiatedBy(NodeUpdateInitiatedByEnum nodeUpdateInitiatedBy) {
        this.nodeUpdateInitiatedBy = nodeUpdateInitiatedBy;
        return this;
    }
    public OffsetDateTime nodeUpdateInitiatedDate;
    public NodeGroupMemberUpdateStatusList withNodeUpdateInitiatedDate(OffsetDateTime nodeUpdateInitiatedDate) {
        this.nodeUpdateInitiatedDate = nodeUpdateInitiatedDate;
        return this;
    }
    public OffsetDateTime nodeUpdateStartDate;
    public NodeGroupMemberUpdateStatusList withNodeUpdateStartDate(OffsetDateTime nodeUpdateStartDate) {
        this.nodeUpdateStartDate = nodeUpdateStartDate;
        return this;
    }
    public NodeUpdateStatusEnum nodeUpdateStatus;
    public NodeGroupMemberUpdateStatusList withNodeUpdateStatus(NodeUpdateStatusEnum nodeUpdateStatus) {
        this.nodeUpdateStatus = nodeUpdateStatus;
        return this;
    }
    public OffsetDateTime nodeUpdateStatusModifiedDate;
    public NodeGroupMemberUpdateStatusList withNodeUpdateStatusModifiedDate(OffsetDateTime nodeUpdateStatusModifiedDate) {
        this.nodeUpdateStatusModifiedDate = nodeUpdateStatusModifiedDate;
        return this;
    }
}