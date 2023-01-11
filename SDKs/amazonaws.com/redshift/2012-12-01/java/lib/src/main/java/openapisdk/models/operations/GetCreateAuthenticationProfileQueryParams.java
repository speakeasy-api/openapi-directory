package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreateAuthenticationProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCreateAuthenticationProfileActionEnum action;
    public GetCreateAuthenticationProfileQueryParams withAction(GetCreateAuthenticationProfileActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AuthenticationProfileContent")
    public String authenticationProfileContent;
    public GetCreateAuthenticationProfileQueryParams withAuthenticationProfileContent(String authenticationProfileContent) {
        this.authenticationProfileContent = authenticationProfileContent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AuthenticationProfileName")
    public String authenticationProfileName;
    public GetCreateAuthenticationProfileQueryParams withAuthenticationProfileName(String authenticationProfileName) {
        this.authenticationProfileName = authenticationProfileName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCreateAuthenticationProfileVersionEnum version;
    public GetCreateAuthenticationProfileQueryParams withVersion(GetCreateAuthenticationProfileVersionEnum version) {
        this.version = version;
        return this;
    }
}