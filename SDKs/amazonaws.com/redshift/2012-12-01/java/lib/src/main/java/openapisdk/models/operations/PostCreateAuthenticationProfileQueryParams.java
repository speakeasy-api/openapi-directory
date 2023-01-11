package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreateAuthenticationProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreateAuthenticationProfileActionEnum action;
    public PostCreateAuthenticationProfileQueryParams withAction(PostCreateAuthenticationProfileActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreateAuthenticationProfileVersionEnum version;
    public PostCreateAuthenticationProfileQueryParams withVersion(PostCreateAuthenticationProfileVersionEnum version) {
        this.version = version;
        return this;
    }
}