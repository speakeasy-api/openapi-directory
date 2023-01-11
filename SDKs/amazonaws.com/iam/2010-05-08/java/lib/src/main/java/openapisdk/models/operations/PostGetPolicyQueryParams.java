package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetPolicyActionEnum action;
    public PostGetPolicyQueryParams withAction(PostGetPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetPolicyVersionEnum version;
    public PostGetPolicyQueryParams withVersion(PostGetPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}