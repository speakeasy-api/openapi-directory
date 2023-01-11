package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVerifyEmailIdentityQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetVerifyEmailIdentityActionEnum action;
    public GetVerifyEmailIdentityQueryParams withAction(GetVerifyEmailIdentityActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EmailAddress")
    public String emailAddress;
    public GetVerifyEmailIdentityQueryParams withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetVerifyEmailIdentityVersionEnum version;
    public GetVerifyEmailIdentityQueryParams withVersion(GetVerifyEmailIdentityVersionEnum version) {
        this.version = version;
        return this;
    }
}