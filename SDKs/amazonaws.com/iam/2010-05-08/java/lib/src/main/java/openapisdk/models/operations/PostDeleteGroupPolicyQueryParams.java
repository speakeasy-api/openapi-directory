package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteGroupPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteGroupPolicyActionEnum action;
    public PostDeleteGroupPolicyQueryParams withAction(PostDeleteGroupPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteGroupPolicyVersionEnum version;
    public PostDeleteGroupPolicyQueryParams withVersion(PostDeleteGroupPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}