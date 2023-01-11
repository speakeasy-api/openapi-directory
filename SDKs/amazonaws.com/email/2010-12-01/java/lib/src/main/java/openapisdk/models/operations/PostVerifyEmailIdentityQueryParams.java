package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostVerifyEmailIdentityQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostVerifyEmailIdentityActionEnum action;
    public PostVerifyEmailIdentityQueryParams withAction(PostVerifyEmailIdentityActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostVerifyEmailIdentityVersionEnum version;
    public PostVerifyEmailIdentityQueryParams withVersion(PostVerifyEmailIdentityVersionEnum version) {
        this.version = version;
        return this;
    }
}