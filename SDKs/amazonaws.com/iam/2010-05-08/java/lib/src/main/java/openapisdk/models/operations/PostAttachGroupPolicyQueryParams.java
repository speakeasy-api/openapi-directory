package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAttachGroupPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAttachGroupPolicyActionEnum action;
    public PostAttachGroupPolicyQueryParams withAction(PostAttachGroupPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAttachGroupPolicyVersionEnum version;
    public PostAttachGroupPolicyQueryParams withVersion(PostAttachGroupPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}