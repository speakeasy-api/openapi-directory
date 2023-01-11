package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUntagResourceQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUntagResourceActionEnum action;
    public PostUntagResourceQueryParams withAction(PostUntagResourceActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUntagResourceVersionEnum version;
    public PostUntagResourceQueryParams withVersion(PostUntagResourceVersionEnum version) {
        this.version = version;
        return this;
    }
}