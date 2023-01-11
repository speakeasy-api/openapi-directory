package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetVerifyDomainIdentityQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetVerifyDomainIdentityActionEnum action;
    public GetVerifyDomainIdentityQueryParams withAction(GetVerifyDomainIdentityActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Domain")
    public String domain;
    public GetVerifyDomainIdentityQueryParams withDomain(String domain) {
        this.domain = domain;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetVerifyDomainIdentityVersionEnum version;
    public GetVerifyDomainIdentityQueryParams withVersion(GetVerifyDomainIdentityVersionEnum version) {
        this.version = version;
        return this;
    }
}