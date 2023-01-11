package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutRolePolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostPutRolePolicyActionEnum action;
    public PostPutRolePolicyQueryParams withAction(PostPutRolePolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostPutRolePolicyVersionEnum version;
    public PostPutRolePolicyQueryParams withVersion(PostPutRolePolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}