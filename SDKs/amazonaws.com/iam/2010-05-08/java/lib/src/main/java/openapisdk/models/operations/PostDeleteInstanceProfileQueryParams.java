package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteInstanceProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteInstanceProfileActionEnum action;
    public PostDeleteInstanceProfileQueryParams withAction(PostDeleteInstanceProfileActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteInstanceProfileVersionEnum version;
    public PostDeleteInstanceProfileQueryParams withVersion(PostDeleteInstanceProfileVersionEnum version) {
        this.version = version;
        return this;
    }
}