package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeAuthenticationProfilesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeAuthenticationProfilesActionEnum action;
    public PostDescribeAuthenticationProfilesQueryParams withAction(PostDescribeAuthenticationProfilesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeAuthenticationProfilesVersionEnum version;
    public PostDescribeAuthenticationProfilesQueryParams withVersion(PostDescribeAuthenticationProfilesVersionEnum version) {
        this.version = version;
        return this;
    }
}