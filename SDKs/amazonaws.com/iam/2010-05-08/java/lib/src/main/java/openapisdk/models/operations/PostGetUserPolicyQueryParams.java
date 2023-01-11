package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetUserPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetUserPolicyActionEnum action;
    public PostGetUserPolicyQueryParams withAction(PostGetUserPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetUserPolicyVersionEnum version;
    public PostGetUserPolicyQueryParams withVersion(PostGetUserPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}