package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateServiceAccessPoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateServiceAccessPoliciesActionEnum action;
    public PostUpdateServiceAccessPoliciesQueryParams withAction(PostUpdateServiceAccessPoliciesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateServiceAccessPoliciesVersionEnum version;
    public PostUpdateServiceAccessPoliciesQueryParams withVersion(PostUpdateServiceAccessPoliciesVersionEnum version) {
        this.version = version;
        return this;
    }
}