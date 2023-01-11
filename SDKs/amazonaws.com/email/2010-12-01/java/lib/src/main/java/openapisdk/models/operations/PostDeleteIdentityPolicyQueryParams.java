package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteIdentityPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteIdentityPolicyActionEnum action;
    public PostDeleteIdentityPolicyQueryParams withAction(PostDeleteIdentityPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteIdentityPolicyVersionEnum version;
    public PostDeleteIdentityPolicyQueryParams withVersion(PostDeleteIdentityPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}