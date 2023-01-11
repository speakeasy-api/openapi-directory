package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeServiceAccessPoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeServiceAccessPoliciesActionEnum action;
    public PostDescribeServiceAccessPoliciesQueryParams withAction(PostDescribeServiceAccessPoliciesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeServiceAccessPoliciesVersionEnum version;
    public PostDescribeServiceAccessPoliciesQueryParams withVersion(PostDescribeServiceAccessPoliciesVersionEnum version) {
        this.version = version;
        return this;
    }
}