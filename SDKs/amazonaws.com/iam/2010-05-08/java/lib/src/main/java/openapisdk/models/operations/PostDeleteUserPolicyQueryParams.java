package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteUserPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteUserPolicyActionEnum action;
    public PostDeleteUserPolicyQueryParams withAction(PostDeleteUserPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteUserPolicyVersionEnum version;
    public PostDeleteUserPolicyQueryParams withVersion(PostDeleteUserPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}