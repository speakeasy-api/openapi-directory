package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAttachUserPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAttachUserPolicyActionEnum action;
    public PostAttachUserPolicyQueryParams withAction(PostAttachUserPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAttachUserPolicyVersionEnum version;
    public PostAttachUserPolicyQueryParams withVersion(PostAttachUserPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}