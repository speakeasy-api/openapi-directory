package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutGroupPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostPutGroupPolicyActionEnum action;
    public PostPutGroupPolicyQueryParams withAction(PostPutGroupPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostPutGroupPolicyVersionEnum version;
    public PostPutGroupPolicyQueryParams withVersion(PostPutGroupPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}