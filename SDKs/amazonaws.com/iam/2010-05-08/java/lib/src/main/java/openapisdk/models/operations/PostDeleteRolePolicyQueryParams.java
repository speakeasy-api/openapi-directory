package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteRolePolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteRolePolicyActionEnum action;
    public PostDeleteRolePolicyQueryParams withAction(PostDeleteRolePolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteRolePolicyVersionEnum version;
    public PostDeleteRolePolicyQueryParams withVersion(PostDeleteRolePolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}