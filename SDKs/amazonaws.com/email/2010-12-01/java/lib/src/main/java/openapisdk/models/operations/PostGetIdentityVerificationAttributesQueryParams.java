package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetIdentityVerificationAttributesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetIdentityVerificationAttributesActionEnum action;
    public PostGetIdentityVerificationAttributesQueryParams withAction(PostGetIdentityVerificationAttributesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetIdentityVerificationAttributesVersionEnum version;
    public PostGetIdentityVerificationAttributesQueryParams withVersion(PostGetIdentityVerificationAttributesVersionEnum version) {
        this.version = version;
        return this;
    }
}