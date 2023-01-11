package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDescribeDefaultSearchFieldQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDescribeDefaultSearchFieldActionEnum action;
    public GetDescribeDefaultSearchFieldQueryParams withAction(GetDescribeDefaultSearchFieldActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DomainName")
    public String domainName;
    public GetDescribeDefaultSearchFieldQueryParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDescribeDefaultSearchFieldVersionEnum version;
    public GetDescribeDefaultSearchFieldQueryParams withVersion(GetDescribeDefaultSearchFieldVersionEnum version) {
        this.version = version;
        return this;
    }
}