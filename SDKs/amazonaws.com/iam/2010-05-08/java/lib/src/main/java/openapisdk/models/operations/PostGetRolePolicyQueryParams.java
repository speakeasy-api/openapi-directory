package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetRolePolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetRolePolicyActionEnum action;
    public PostGetRolePolicyQueryParams withAction(PostGetRolePolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetRolePolicyVersionEnum version;
    public PostGetRolePolicyQueryParams withVersion(PostGetRolePolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}