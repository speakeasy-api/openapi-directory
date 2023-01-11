package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteAccessKeyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteAccessKeyActionEnum action;
    public PostDeleteAccessKeyQueryParams withAction(PostDeleteAccessKeyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteAccessKeyVersionEnum version;
    public PostDeleteAccessKeyQueryParams withVersion(PostDeleteAccessKeyVersionEnum version) {
        this.version = version;
        return this;
    }
}