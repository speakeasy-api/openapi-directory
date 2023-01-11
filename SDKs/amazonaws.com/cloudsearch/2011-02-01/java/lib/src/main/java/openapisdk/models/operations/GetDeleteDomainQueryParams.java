package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteDomainQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteDomainActionEnum action;
    public GetDeleteDomainQueryParams withAction(GetDeleteDomainActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DomainName")
    public String domainName;
    public GetDeleteDomainQueryParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteDomainVersionEnum version;
    public GetDeleteDomainQueryParams withVersion(GetDeleteDomainVersionEnum version) {
        this.version = version;
        return this;
    }
}