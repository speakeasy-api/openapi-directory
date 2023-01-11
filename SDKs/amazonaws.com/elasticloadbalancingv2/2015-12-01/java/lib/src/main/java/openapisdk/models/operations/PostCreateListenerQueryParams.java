package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateListenerQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateListenerActionEnum action;
    public PostCreateListenerQueryParams withAction(PostCreateListenerActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateListenerVersionEnum version;
    public PostCreateListenerQueryParams withVersion(PostCreateListenerVersionEnum version) {
        this.version = version;
        return this;
    }
}