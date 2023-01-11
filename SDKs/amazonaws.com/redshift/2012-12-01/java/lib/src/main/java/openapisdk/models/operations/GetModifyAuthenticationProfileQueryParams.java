package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetModifyAuthenticationProfileQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetModifyAuthenticationProfileActionEnum action;
    public GetModifyAuthenticationProfileQueryParams withAction(GetModifyAuthenticationProfileActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AuthenticationProfileContent")
    public String authenticationProfileContent;
    public GetModifyAuthenticationProfileQueryParams withAuthenticationProfileContent(String authenticationProfileContent) {
        this.authenticationProfileContent = authenticationProfileContent;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AuthenticationProfileName")
    public String authenticationProfileName;
    public GetModifyAuthenticationProfileQueryParams withAuthenticationProfileName(String authenticationProfileName) {
        this.authenticationProfileName = authenticationProfileName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetModifyAuthenticationProfileVersionEnum version;
    public GetModifyAuthenticationProfileQueryParams withVersion(GetModifyAuthenticationProfileVersionEnum version) {
        this.version = version;
        return this;
    }
}