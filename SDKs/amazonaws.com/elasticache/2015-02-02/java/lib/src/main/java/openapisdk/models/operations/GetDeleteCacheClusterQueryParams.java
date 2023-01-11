package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteCacheClusterQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteCacheClusterActionEnum action;
    public GetDeleteCacheClusterQueryParams withAction(GetDeleteCacheClusterActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CacheClusterId")
    public String cacheClusterId;
    public GetDeleteCacheClusterQueryParams withCacheClusterId(String cacheClusterId) {
        this.cacheClusterId = cacheClusterId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=FinalSnapshotIdentifier")
    public String finalSnapshotIdentifier;
    public GetDeleteCacheClusterQueryParams withFinalSnapshotIdentifier(String finalSnapshotIdentifier) {
        this.finalSnapshotIdentifier = finalSnapshotIdentifier;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteCacheClusterVersionEnum version;
    public GetDeleteCacheClusterQueryParams withVersion(GetDeleteCacheClusterVersionEnum version) {
        this.version = version;
        return this;
    }
}