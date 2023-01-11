package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutUserPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostPutUserPolicyActionEnum action;
    public PostPutUserPolicyQueryParams withAction(PostPutUserPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostPutUserPolicyVersionEnum version;
    public PostPutUserPolicyQueryParams withVersion(PostPutUserPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}