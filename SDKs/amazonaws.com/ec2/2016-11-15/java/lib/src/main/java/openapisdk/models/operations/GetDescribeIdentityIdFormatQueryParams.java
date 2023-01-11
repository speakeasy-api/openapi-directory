package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeIdentityIdFormatQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeIdentityIdFormatActionEnum action;
    public GetDescribeIdentityIdFormatQueryParams withAction(GetDescribeIdentityIdFormatActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PrincipalArn")
    public String principalArn;
    public GetDescribeIdentityIdFormatQueryParams withPrincipalArn(String principalArn) {
        this.principalArn = principalArn;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Resource")
    public String resource;
    public GetDescribeIdentityIdFormatQueryParams withResource(String resource) {
        this.resource = resource;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeIdentityIdFormatVersionEnum version;
    public GetDescribeIdentityIdFormatQueryParams withVersion(GetDescribeIdentityIdFormatVersionEnum version) {
        this.version = version;
        return this;
    }
}