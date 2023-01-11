package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreatePolicyVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreatePolicyVersionActionEnum action;
    public PostCreatePolicyVersionQueryParams withAction(PostCreatePolicyVersionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreatePolicyVersionVersionEnum version;
    public PostCreatePolicyVersionQueryParams withVersion(PostCreatePolicyVersionVersionEnum version) {
        this.version = version;
        return this;
    }
}