package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVerifyEmailAddressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetVerifyEmailAddressActionEnum action;
    public GetVerifyEmailAddressQueryParams withAction(GetVerifyEmailAddressActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EmailAddress")
    public String emailAddress;
    public GetVerifyEmailAddressQueryParams withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetVerifyEmailAddressVersionEnum version;
    public GetVerifyEmailAddressQueryParams withVersion(GetVerifyEmailAddressVersionEnum version) {
        this.version = version;
        return this;
    }
}