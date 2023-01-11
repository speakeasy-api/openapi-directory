package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeletePolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeletePolicyActionEnum action;
    public PostDeletePolicyQueryParams withAction(PostDeletePolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeletePolicyVersionEnum version;
    public PostDeletePolicyQueryParams withVersion(PostDeletePolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}