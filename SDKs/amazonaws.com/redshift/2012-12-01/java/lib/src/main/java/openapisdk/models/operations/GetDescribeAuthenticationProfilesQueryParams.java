package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeAuthenticationProfilesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeAuthenticationProfilesActionEnum action;
    public GetDescribeAuthenticationProfilesQueryParams withAction(GetDescribeAuthenticationProfilesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AuthenticationProfileName")
    public String authenticationProfileName;
    public GetDescribeAuthenticationProfilesQueryParams withAuthenticationProfileName(String authenticationProfileName) {
        this.authenticationProfileName = authenticationProfileName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeAuthenticationProfilesVersionEnum version;
    public GetDescribeAuthenticationProfilesQueryParams withVersion(GetDescribeAuthenticationProfilesVersionEnum version) {
        this.version = version;
        return this;
    }
}