package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteWarmPoolQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteWarmPoolActionEnum action;
    public PostDeleteWarmPoolQueryParams withAction(PostDeleteWarmPoolActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteWarmPoolVersionEnum version;
    public PostDeleteWarmPoolQueryParams withVersion(PostDeleteWarmPoolVersionEnum version) {
        this.version = version;
        return this;
    }
}