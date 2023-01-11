package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBatchStopUpdateActionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetBatchStopUpdateActionActionEnum action;
    public GetBatchStopUpdateActionQueryParams withAction(GetBatchStopUpdateActionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CacheClusterIds")
    public String[] cacheClusterIds;
    public GetBatchStopUpdateActionQueryParams withCacheClusterIds(String[] cacheClusterIds) {
        this.cacheClusterIds = cacheClusterIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ReplicationGroupIds")
    public String[] replicationGroupIds;
    public GetBatchStopUpdateActionQueryParams withReplicationGroupIds(String[] replicationGroupIds) {
        this.replicationGroupIds = replicationGroupIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ServiceUpdateName")
    public String serviceUpdateName;
    public GetBatchStopUpdateActionQueryParams withServiceUpdateName(String serviceUpdateName) {
        this.serviceUpdateName = serviceUpdateName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetBatchStopUpdateActionVersionEnum version;
    public GetBatchStopUpdateActionQueryParams withVersion(GetBatchStopUpdateActionVersionEnum version) {
        this.version = version;
        return this;
    }
}