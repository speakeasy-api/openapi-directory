package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVerifyDomainDkimQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetVerifyDomainDkimActionEnum action;
    public GetVerifyDomainDkimQueryParams withAction(GetVerifyDomainDkimActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Domain")
    public String domain;
    public GetVerifyDomainDkimQueryParams withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetVerifyDomainDkimVersionEnum version;
    public GetVerifyDomainDkimQueryParams withVersion(GetVerifyDomainDkimVersionEnum version) {
        this.version = version;
        return this;
    }
}