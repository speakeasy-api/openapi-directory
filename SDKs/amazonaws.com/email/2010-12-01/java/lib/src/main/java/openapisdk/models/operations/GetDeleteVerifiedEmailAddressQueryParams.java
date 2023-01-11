package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteVerifiedEmailAddressQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteVerifiedEmailAddressActionEnum action;
    public GetDeleteVerifiedEmailAddressQueryParams withAction(GetDeleteVerifiedEmailAddressActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EmailAddress")
    public String emailAddress;
    public GetDeleteVerifiedEmailAddressQueryParams withEmailAddress(String emailAddress) {
        this.emailAddress = emailAddress;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteVerifiedEmailAddressVersionEnum version;
    public GetDeleteVerifiedEmailAddressQueryParams withVersion(GetDeleteVerifiedEmailAddressVersionEnum version) {
        this.version = version;
        return this;
    }
}