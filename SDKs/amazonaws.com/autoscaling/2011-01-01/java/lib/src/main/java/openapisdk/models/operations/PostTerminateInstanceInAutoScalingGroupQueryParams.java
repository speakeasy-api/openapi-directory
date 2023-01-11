package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostTerminateInstanceInAutoScalingGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostTerminateInstanceInAutoScalingGroupActionEnum action;
    public PostTerminateInstanceInAutoScalingGroupQueryParams withAction(PostTerminateInstanceInAutoScalingGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostTerminateInstanceInAutoScalingGroupVersionEnum version;
    public PostTerminateInstanceInAutoScalingGroupQueryParams withVersion(PostTerminateInstanceInAutoScalingGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}