package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateAccessKeyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateAccessKeyActionEnum action;
    public PostUpdateAccessKeyQueryParams withAction(PostUpdateAccessKeyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateAccessKeyVersionEnum version;
    public PostUpdateAccessKeyQueryParams withVersion(PostUpdateAccessKeyVersionEnum version) {
        this.version = version;
        return this;
    }
}