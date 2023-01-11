package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostCreatePolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostCreatePolicyActionEnum action;
    public PostCreatePolicyQueryParams withAction(PostCreatePolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostCreatePolicyVersionEnum version;
    public PostCreatePolicyQueryParams withVersion(PostCreatePolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}