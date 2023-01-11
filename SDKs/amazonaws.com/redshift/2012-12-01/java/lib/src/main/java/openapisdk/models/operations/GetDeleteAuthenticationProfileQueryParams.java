package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteAuthenticationProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteAuthenticationProfileActionEnum action;
    public GetDeleteAuthenticationProfileQueryParams withAction(GetDeleteAuthenticationProfileActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AuthenticationProfileName")
    public String authenticationProfileName;
    public GetDeleteAuthenticationProfileQueryParams withAuthenticationProfileName(String authenticationProfileName) {
        this.authenticationProfileName = authenticationProfileName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteAuthenticationProfileVersionEnum version;
    public GetDeleteAuthenticationProfileQueryParams withVersion(GetDeleteAuthenticationProfileVersionEnum version) {
        this.version = version;
        return this;
    }
}