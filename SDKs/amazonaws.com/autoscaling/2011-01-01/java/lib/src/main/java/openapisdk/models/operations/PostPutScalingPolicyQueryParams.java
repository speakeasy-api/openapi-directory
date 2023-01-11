package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostPutScalingPolicyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostPutScalingPolicyActionEnum action;
    public PostPutScalingPolicyQueryParams withAction(PostPutScalingPolicyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostPutScalingPolicyVersionEnum version;
    public PostPutScalingPolicyQueryParams withVersion(PostPutScalingPolicyVersionEnum version) {
        this.version = version;
        return this;
    }
}