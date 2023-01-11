package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTerminateInstanceInAutoScalingGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetTerminateInstanceInAutoScalingGroupActionEnum action;
    public GetTerminateInstanceInAutoScalingGroupQueryParams withAction(GetTerminateInstanceInAutoScalingGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceId")
    public String instanceId;
    public GetTerminateInstanceInAutoScalingGroupQueryParams withInstanceId(String instanceId) {
        this.instanceId = instanceId;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ShouldDecrementDesiredCapacity")
    public Boolean shouldDecrementDesiredCapacity;
    public GetTerminateInstanceInAutoScalingGroupQueryParams withShouldDecrementDesiredCapacity(Boolean shouldDecrementDesiredCapacity) {
        this.shouldDecrementDesiredCapacity = shouldDecrementDesiredCapacity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetTerminateInstanceInAutoScalingGroupVersionEnum version;
    public GetTerminateInstanceInAutoScalingGroupQueryParams withVersion(GetTerminateInstanceInAutoScalingGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}