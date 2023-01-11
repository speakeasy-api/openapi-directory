package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListIdentityPoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListIdentityPoliciesActionEnum action;
    public PostListIdentityPoliciesQueryParams withAction(PostListIdentityPoliciesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListIdentityPoliciesVersionEnum version;
    public PostListIdentityPoliciesQueryParams withVersion(PostListIdentityPoliciesVersionEnum version) {
        this.version = version;
        return this;
    }
}