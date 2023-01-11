package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostResetCacheParameterGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostResetCacheParameterGroupActionEnum action;
    public PostResetCacheParameterGroupQueryParams withAction(PostResetCacheParameterGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostResetCacheParameterGroupVersionEnum version;
    public PostResetCacheParameterGroupQueryParams withVersion(PostResetCacheParameterGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}