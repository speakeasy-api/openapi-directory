package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTagInstanceProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostTagInstanceProfileActionEnum action;
    public PostTagInstanceProfileQueryParams withAction(PostTagInstanceProfileActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostTagInstanceProfileVersionEnum version;
    public PostTagInstanceProfileQueryParams withVersion(PostTagInstanceProfileVersionEnum version) {
        this.version = version;
        return this;
    }
}