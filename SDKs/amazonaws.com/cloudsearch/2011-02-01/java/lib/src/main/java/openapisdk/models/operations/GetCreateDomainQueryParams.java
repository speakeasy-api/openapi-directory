package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetCreateDomainQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetCreateDomainActionEnum action;
    public GetCreateDomainQueryParams withAction(GetCreateDomainActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DomainName")
    public String domainName;
    public GetCreateDomainQueryParams withDomainName(String domainName) {
        this.domainName = domainName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetCreateDomainVersionEnum version;
    public GetCreateDomainQueryParams withVersion(GetCreateDomainVersionEnum version) {
        this.version = version;
        return this;
    }
}