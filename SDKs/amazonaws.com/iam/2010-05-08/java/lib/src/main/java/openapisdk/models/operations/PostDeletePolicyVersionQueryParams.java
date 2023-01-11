package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeletePolicyVersionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeletePolicyVersionActionEnum action;
    public PostDeletePolicyVersionQueryParams withAction(PostDeletePolicyVersionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeletePolicyVersionVersionEnum version;
    public PostDeletePolicyVersionQueryParams withVersion(PostDeletePolicyVersionVersionEnum version) {
        this.version = version;
        return this;
    }
}