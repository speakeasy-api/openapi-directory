package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeleteAutoScalingGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostDeleteAutoScalingGroupActionEnum action;
    public PostDeleteAutoScalingGroupQueryParams withAction(PostDeleteAutoScalingGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostDeleteAutoScalingGroupVersionEnum version;
    public PostDeleteAutoScalingGroupQueryParams withVersion(PostDeleteAutoScalingGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}