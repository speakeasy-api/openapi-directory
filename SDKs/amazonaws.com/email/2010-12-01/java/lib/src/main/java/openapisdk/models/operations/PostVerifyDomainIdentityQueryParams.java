package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostVerifyDomainIdentityQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostVerifyDomainIdentityActionEnum action;
    public PostVerifyDomainIdentityQueryParams withAction(PostVerifyDomainIdentityActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostVerifyDomainIdentityVersionEnum version;
    public PostVerifyDomainIdentityQueryParams withVersion(PostVerifyDomainIdentityVersionEnum version) {
        this.version = version;
        return this;
    }
}