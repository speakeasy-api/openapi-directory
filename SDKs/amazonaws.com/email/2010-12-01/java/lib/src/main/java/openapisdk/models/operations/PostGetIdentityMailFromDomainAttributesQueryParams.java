package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetIdentityMailFromDomainAttributesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetIdentityMailFromDomainAttributesActionEnum action;
    public PostGetIdentityMailFromDomainAttributesQueryParams withAction(PostGetIdentityMailFromDomainAttributesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetIdentityMailFromDomainAttributesVersionEnum version;
    public PostGetIdentityMailFromDomainAttributesQueryParams withVersion(PostGetIdentityMailFromDomainAttributesVersionEnum version) {
        this.version = version;
        return this;
    }
}