package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostUpdateAutoScalingGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostUpdateAutoScalingGroupActionEnum action;
    public PostUpdateAutoScalingGroupQueryParams withAction(PostUpdateAutoScalingGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostUpdateAutoScalingGroupVersionEnum version;
    public PostUpdateAutoScalingGroupQueryParams withVersion(PostUpdateAutoScalingGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}