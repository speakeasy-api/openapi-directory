package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBatchApplyUpdateActionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetBatchApplyUpdateActionActionEnum action;
    public GetBatchApplyUpdateActionQueryParams withAction(GetBatchApplyUpdateActionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CacheClusterIds")
    public String[] cacheClusterIds;
    public GetBatchApplyUpdateActionQueryParams withCacheClusterIds(String[] cacheClusterIds) {
        this.cacheClusterIds = cacheClusterIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ReplicationGroupIds")
    public String[] replicationGroupIds;
    public GetBatchApplyUpdateActionQueryParams withReplicationGroupIds(String[] replicationGroupIds) {
        this.replicationGroupIds = replicationGroupIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ServiceUpdateName")
    public String serviceUpdateName;
    public GetBatchApplyUpdateActionQueryParams withServiceUpdateName(String serviceUpdateName) {
        this.serviceUpdateName = serviceUpdateName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetBatchApplyUpdateActionVersionEnum version;
    public GetBatchApplyUpdateActionQueryParams withVersion(GetBatchApplyUpdateActionVersionEnum version) {
        this.version = version;
        return this;
    }
}