package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeDomainsQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeDomainsActionEnum action;
    public GetDescribeDomainsQueryParams withAction(GetDescribeDomainsActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DomainNames")
    public String[] domainNames;
    public GetDescribeDomainsQueryParams withDomainNames(String[] domainNames) {
        this.domainNames = domainNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeDomainsVersionEnum version;
    public GetDescribeDomainsQueryParams withVersion(GetDescribeDomainsVersionEnum version) {
        this.version = version;
        return this;
    }
}