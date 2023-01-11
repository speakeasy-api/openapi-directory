package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetPolicyVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetPolicyVersionActionEnum action;
    public PostGetPolicyVersionQueryParams withAction(PostGetPolicyVersionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetPolicyVersionVersionEnum version;
    public PostGetPolicyVersionQueryParams withVersion(PostGetPolicyVersionVersionEnum version) {
        this.version = version;
        return this;
    }
}