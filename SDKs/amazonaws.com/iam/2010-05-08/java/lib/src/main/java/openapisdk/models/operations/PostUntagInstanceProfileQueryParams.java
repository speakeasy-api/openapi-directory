package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUntagInstanceProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUntagInstanceProfileActionEnum action;
    public PostUntagInstanceProfileQueryParams withAction(PostUntagInstanceProfileActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUntagInstanceProfileVersionEnum version;
    public PostUntagInstanceProfileQueryParams withVersion(PostUntagInstanceProfileVersionEnum version) {
        this.version = version;
        return this;
    }
}