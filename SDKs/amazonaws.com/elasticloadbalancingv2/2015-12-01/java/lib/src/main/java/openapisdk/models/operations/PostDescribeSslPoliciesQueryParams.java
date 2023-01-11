package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeSslPoliciesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDescribeSslPoliciesActionEnum action;
    public PostDescribeSslPoliciesQueryParams withAction(PostDescribeSslPoliciesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDescribeSslPoliciesVersionEnum version;
    public PostDescribeSslPoliciesQueryParams withVersion(PostDescribeSslPoliciesVersionEnum version) {
        this.version = version;
        return this;
    }
}