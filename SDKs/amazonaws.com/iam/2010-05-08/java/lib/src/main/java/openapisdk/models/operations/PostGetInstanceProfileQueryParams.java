package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetInstanceProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetInstanceProfileActionEnum action;
    public PostGetInstanceProfileQueryParams withAction(PostGetInstanceProfileActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetInstanceProfileVersionEnum version;
    public PostGetInstanceProfileQueryParams withVersion(PostGetInstanceProfileVersionEnum version) {
        this.version = version;
        return this;
    }
}