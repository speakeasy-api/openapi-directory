package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutWarmPoolQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostPutWarmPoolActionEnum action;
    public PostPutWarmPoolQueryParams withAction(PostPutWarmPoolActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostPutWarmPoolVersionEnum version;
    public PostPutWarmPoolQueryParams withVersion(PostPutWarmPoolVersionEnum version) {
        this.version = version;
        return this;
    }
}