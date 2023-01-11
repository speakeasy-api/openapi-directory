package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDetachInstancesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDetachInstancesActionEnum action;
    public GetDetachInstancesQueryParams withAction(GetDetachInstancesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupName")
    public String autoScalingGroupName;
    public GetDetachInstancesQueryParams withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceIds")
    public String[] instanceIds;
    public GetDetachInstancesQueryParams withInstanceIds(String[] instanceIds) {
        this.instanceIds = instanceIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ShouldDecrementDesiredCapacity")
    public Boolean shouldDecrementDesiredCapacity;
    public GetDetachInstancesQueryParams withShouldDecrementDesiredCapacity(Boolean shouldDecrementDesiredCapacity) {
        this.shouldDecrementDesiredCapacity = shouldDecrementDesiredCapacity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDetachInstancesVersionEnum version;
    public GetDetachInstancesQueryParams withVersion(GetDetachInstancesVersionEnum version) {
        this.version = version;
        return this;
    }
}