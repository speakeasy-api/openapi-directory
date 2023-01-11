package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeServiceAccessPoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeServiceAccessPoliciesActionEnum action;
    public GetDescribeServiceAccessPoliciesQueryParams withAction(GetDescribeServiceAccessPoliciesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DomainName")
    public String domainName;
    public GetDescribeServiceAccessPoliciesQueryParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeServiceAccessPoliciesVersionEnum version;
    public GetDescribeServiceAccessPoliciesQueryParams withVersion(GetDescribeServiceAccessPoliciesVersionEnum version) {
        this.version = version;
        return this;
    }
}