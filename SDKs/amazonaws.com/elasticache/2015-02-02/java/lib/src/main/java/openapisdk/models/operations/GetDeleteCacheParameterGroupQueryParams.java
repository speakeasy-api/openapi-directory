package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteCacheParameterGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteCacheParameterGroupActionEnum action;
    public GetDeleteCacheParameterGroupQueryParams withAction(GetDeleteCacheParameterGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=CacheParameterGroupName")
    public String cacheParameterGroupName;
    public GetDeleteCacheParameterGroupQueryParams withCacheParameterGroupName(String cacheParameterGroupName) {
        this.cacheParameterGroupName = cacheParameterGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteCacheParameterGroupVersionEnum version;
    public GetDeleteCacheParameterGroupQueryParams withVersion(GetDeleteCacheParameterGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}