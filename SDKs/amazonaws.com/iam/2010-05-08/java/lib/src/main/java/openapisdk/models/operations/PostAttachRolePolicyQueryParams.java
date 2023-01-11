package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostAttachRolePolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostAttachRolePolicyActionEnum action;
    public PostAttachRolePolicyQueryParams withAction(PostAttachRolePolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostAttachRolePolicyVersionEnum version;
    public PostAttachRolePolicyQueryParams withVersion(PostAttachRolePolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}