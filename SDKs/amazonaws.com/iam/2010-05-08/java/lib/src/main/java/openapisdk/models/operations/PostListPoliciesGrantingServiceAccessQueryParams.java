package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostListPoliciesGrantingServiceAccessQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostListPoliciesGrantingServiceAccessActionEnum action;
    public PostListPoliciesGrantingServiceAccessQueryParams withAction(PostListPoliciesGrantingServiceAccessActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostListPoliciesGrantingServiceAccessVersionEnum version;
    public PostListPoliciesGrantingServiceAccessQueryParams withVersion(PostListPoliciesGrantingServiceAccessVersionEnum version) {
        this.version = version;
        return this;
    }
}