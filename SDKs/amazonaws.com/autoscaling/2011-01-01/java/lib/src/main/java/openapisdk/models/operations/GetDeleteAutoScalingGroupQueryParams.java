package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteAutoScalingGroupQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteAutoScalingGroupActionEnum action;
    public GetDeleteAutoScalingGroupQueryParams withAction(GetDeleteAutoScalingGroupActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupName")
    public String autoScalingGroupName;
    public GetDeleteAutoScalingGroupQueryParams withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ForceDelete")
    public Boolean forceDelete;
    public GetDeleteAutoScalingGroupQueryParams withForceDelete(Boolean forceDelete) {
        this.forceDelete = forceDelete;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteAutoScalingGroupVersionEnum version;
    public GetDeleteAutoScalingGroupQueryParams withVersion(GetDeleteAutoScalingGroupVersionEnum version) {
        this.version = version;
        return this;
    }
}