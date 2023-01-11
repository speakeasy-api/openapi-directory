package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetListAllowedNodeTypeModificationsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetListAllowedNodeTypeModificationsActionEnum action;
    public GetListAllowedNodeTypeModificationsQueryParams withAction(GetListAllowedNodeTypeModificationsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CacheClusterId")
    public String cacheClusterId;
    public GetListAllowedNodeTypeModificationsQueryParams withCacheClusterId(String cacheClusterId) {
        this.cacheClusterId = cacheClusterId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ReplicationGroupId")
    public String replicationGroupId;
    public GetListAllowedNodeTypeModificationsQueryParams withReplicationGroupId(String replicationGroupId) {
        this.replicationGroupId = replicationGroupId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetListAllowedNodeTypeModificationsVersionEnum version;
    public GetListAllowedNodeTypeModificationsQueryParams withVersion(GetListAllowedNodeTypeModificationsVersionEnum version) {
        this.version = version;
        return this;
    }
}