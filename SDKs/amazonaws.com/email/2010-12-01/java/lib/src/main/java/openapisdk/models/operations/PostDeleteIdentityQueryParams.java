package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteIdentityQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteIdentityActionEnum action;
    public PostDeleteIdentityQueryParams withAction(PostDeleteIdentityActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteIdentityVersionEnum version;
    public PostDeleteIdentityQueryParams withVersion(PostDeleteIdentityVersionEnum version) {
        this.version = version;
        return this;
    }
}