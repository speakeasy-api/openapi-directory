package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetEnterStandbyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetEnterStandbyActionEnum action;
    public GetEnterStandbyQueryParams withAction(GetEnterStandbyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupName")
    public String autoScalingGroupName;
    public GetEnterStandbyQueryParams withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceIds")
    public String[] instanceIds;
    public GetEnterStandbyQueryParams withInstanceIds(String[] instanceIds) {
        this.instanceIds = instanceIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ShouldDecrementDesiredCapacity")
    public Boolean shouldDecrementDesiredCapacity;
    public GetEnterStandbyQueryParams withShouldDecrementDesiredCapacity(Boolean shouldDecrementDesiredCapacity) {
        this.shouldDecrementDesiredCapacity = shouldDecrementDesiredCapacity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetEnterStandbyVersionEnum version;
    public GetEnterStandbyQueryParams withVersion(GetEnterStandbyVersionEnum version) {
        this.version = version;
        return this;
    }
}