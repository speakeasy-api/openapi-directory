package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetGroupPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetGroupPolicyActionEnum action;
    public PostGetGroupPolicyQueryParams withAction(PostGetGroupPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetGroupPolicyVersionEnum version;
    public PostGetGroupPolicyQueryParams withVersion(PostGetGroupPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}