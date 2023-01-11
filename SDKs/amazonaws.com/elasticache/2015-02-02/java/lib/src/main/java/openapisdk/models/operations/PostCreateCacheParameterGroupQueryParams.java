package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateCacheParameterGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateCacheParameterGroupActionEnum action;
    public PostCreateCacheParameterGroupQueryParams withAction(PostCreateCacheParameterGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateCacheParameterGroupVersionEnum version;
    public PostCreateCacheParameterGroupQueryParams withVersion(PostCreateCacheParameterGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}