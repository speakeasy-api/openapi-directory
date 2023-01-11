package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUntagPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUntagPolicyActionEnum action;
    public PostUntagPolicyQueryParams withAction(PostUntagPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUntagPolicyVersionEnum version;
    public PostUntagPolicyQueryParams withVersion(PostUntagPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}