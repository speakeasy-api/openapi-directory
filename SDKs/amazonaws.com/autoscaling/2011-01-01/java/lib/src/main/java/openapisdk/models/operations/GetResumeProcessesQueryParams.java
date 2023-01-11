package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetResumeProcessesQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetResumeProcessesActionEnum action;
    public GetResumeProcessesQueryParams withAction(GetResumeProcessesActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupName")
    public String autoScalingGroupName;
    public GetResumeProcessesQueryParams withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ScalingProcesses")
    public String[] scalingProcesses;
    public GetResumeProcessesQueryParams withScalingProcesses(String[] scalingProcesses) {
        this.scalingProcesses = scalingProcesses;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetResumeProcessesVersionEnum version;
    public GetResumeProcessesQueryParams withVersion(GetResumeProcessesVersionEnum version) {
        this.version = version;
        return this;
    }
}