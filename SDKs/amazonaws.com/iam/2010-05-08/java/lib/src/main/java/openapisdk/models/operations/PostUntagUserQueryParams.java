package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUntagUserQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUntagUserActionEnum action;
    public PostUntagUserQueryParams withAction(PostUntagUserActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUntagUserVersionEnum version;
    public PostUntagUserQueryParams withVersion(PostUntagUserVersionEnum version) {
        this.version = version;
        return this;
    }
}