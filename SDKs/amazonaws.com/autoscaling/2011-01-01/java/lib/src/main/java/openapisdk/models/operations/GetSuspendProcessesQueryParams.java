package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetSuspendProcessesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetSuspendProcessesActionEnum action;
    public GetSuspendProcessesQueryParams withAction(GetSuspendProcessesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupName")
    public String autoScalingGroupName;
    public GetSuspendProcessesQueryParams withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ScalingProcesses")
    public String[] scalingProcesses;
    public GetSuspendProcessesQueryParams withScalingProcesses(String[] scalingProcesses) {
        this.scalingProcesses = scalingProcesses;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetSuspendProcessesVersionEnum version;
    public GetSuspendProcessesQueryParams withVersion(GetSuspendProcessesVersionEnum version) {
        this.version = version;
        return this;
    }
}