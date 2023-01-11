package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetExitStandbyQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetExitStandbyActionEnum action;
    public GetExitStandbyQueryParams withAction(GetExitStandbyActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupName")
    public String autoScalingGroupName;
    public GetExitStandbyQueryParams withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceIds")
    public String[] instanceIds;
    public GetExitStandbyQueryParams withInstanceIds(String[] instanceIds) {
        this.instanceIds = instanceIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetExitStandbyVersionEnum version;
    public GetExitStandbyQueryParams withVersion(GetExitStandbyVersionEnum version) {
        this.version = version;
        return this;
    }
}