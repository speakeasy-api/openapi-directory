package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSetDesiredCapacityQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetSetDesiredCapacityActionEnum action;
    public GetSetDesiredCapacityQueryParams withAction(GetSetDesiredCapacityActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupName")
    public String autoScalingGroupName;
    public GetSetDesiredCapacityQueryParams withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=DesiredCapacity")
    public Long desiredCapacity;
    public GetSetDesiredCapacityQueryParams withDesiredCapacity(Long desiredCapacity) {
        this.desiredCapacity = desiredCapacity;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=HonorCooldown")
    public Boolean honorCooldown;
    public GetSetDesiredCapacityQueryParams withHonorCooldown(Boolean honorCooldown) {
        this.honorCooldown = honorCooldown;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetSetDesiredCapacityVersionEnum version;
    public GetSetDesiredCapacityQueryParams withVersion(GetSetDesiredCapacityVersionEnum version) {
        this.version = version;
        return this;
    }
}