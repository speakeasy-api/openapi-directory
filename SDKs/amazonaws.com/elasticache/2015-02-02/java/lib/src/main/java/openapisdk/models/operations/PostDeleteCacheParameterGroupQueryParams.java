package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteCacheParameterGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteCacheParameterGroupActionEnum action;
    public PostDeleteCacheParameterGroupQueryParams withAction(PostDeleteCacheParameterGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteCacheParameterGroupVersionEnum version;
    public PostDeleteCacheParameterGroupQueryParams withVersion(PostDeleteCacheParameterGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}