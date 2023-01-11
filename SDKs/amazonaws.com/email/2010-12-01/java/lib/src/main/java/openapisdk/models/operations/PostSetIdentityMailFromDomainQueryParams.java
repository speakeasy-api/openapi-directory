package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSetIdentityMailFromDomainQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostSetIdentityMailFromDomainActionEnum action;
    public PostSetIdentityMailFromDomainQueryParams withAction(PostSetIdentityMailFromDomainActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostSetIdentityMailFromDomainVersionEnum version;
    public PostSetIdentityMailFromDomainQueryParams withVersion(PostSetIdentityMailFromDomainVersionEnum version) {
        this.version = version;
        return this;
    }
}