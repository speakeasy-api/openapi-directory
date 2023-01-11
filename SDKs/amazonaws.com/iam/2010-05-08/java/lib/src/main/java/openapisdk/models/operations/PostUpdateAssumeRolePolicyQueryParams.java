package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateAssumeRolePolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateAssumeRolePolicyActionEnum action;
    public PostUpdateAssumeRolePolicyQueryParams withAction(PostUpdateAssumeRolePolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateAssumeRolePolicyVersionEnum version;
    public PostUpdateAssumeRolePolicyQueryParams withVersion(PostUpdateAssumeRolePolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}