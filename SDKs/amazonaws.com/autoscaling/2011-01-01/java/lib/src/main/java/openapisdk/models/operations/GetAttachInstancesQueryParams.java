package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAttachInstancesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetAttachInstancesActionEnum action;
    public GetAttachInstancesQueryParams withAction(GetAttachInstancesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupName")
    public String autoScalingGroupName;
    public GetAttachInstancesQueryParams withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=InstanceIds")
    public String[] instanceIds;
    public GetAttachInstancesQueryParams withInstanceIds(String[] instanceIds) {
        this.instanceIds = instanceIds;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetAttachInstancesVersionEnum version;
    public GetAttachInstancesQueryParams withVersion(GetAttachInstancesVersionEnum version) {
        this.version = version;
        return this;
    }
}