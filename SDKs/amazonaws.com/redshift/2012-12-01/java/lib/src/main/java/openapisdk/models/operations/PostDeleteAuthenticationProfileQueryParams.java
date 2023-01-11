package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteAuthenticationProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteAuthenticationProfileActionEnum action;
    public PostDeleteAuthenticationProfileQueryParams withAction(PostDeleteAuthenticationProfileActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteAuthenticationProfileVersionEnum version;
    public PostDeleteAuthenticationProfileQueryParams withVersion(PostDeleteAuthenticationProfileVersionEnum version) {
        this.version = version;
        return this;
    }
}