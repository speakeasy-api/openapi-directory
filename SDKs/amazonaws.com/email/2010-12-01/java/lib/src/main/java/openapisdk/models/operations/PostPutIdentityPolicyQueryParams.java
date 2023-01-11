package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutIdentityPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostPutIdentityPolicyActionEnum action;
    public PostPutIdentityPolicyQueryParams withAction(PostPutIdentityPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostPutIdentityPolicyVersionEnum version;
    public PostPutIdentityPolicyQueryParams withVersion(PostPutIdentityPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}