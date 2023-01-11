package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetIdentityPoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetIdentityPoliciesActionEnum action;
    public PostGetIdentityPoliciesQueryParams withAction(PostGetIdentityPoliciesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetIdentityPoliciesVersionEnum version;
    public PostGetIdentityPoliciesQueryParams withVersion(PostGetIdentityPoliciesVersionEnum version) {
        this.version = version;
        return this;
    }
}