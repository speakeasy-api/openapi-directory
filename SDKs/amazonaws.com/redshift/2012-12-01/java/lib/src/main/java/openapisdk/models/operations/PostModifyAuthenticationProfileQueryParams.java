package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostModifyAuthenticationProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostModifyAuthenticationProfileActionEnum action;
    public PostModifyAuthenticationProfileQueryParams withAction(PostModifyAuthenticationProfileActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostModifyAuthenticationProfileVersionEnum version;
    public PostModifyAuthenticationProfileQueryParams withVersion(PostModifyAuthenticationProfileVersionEnum version) {
        this.version = version;
        return this;
    }
}