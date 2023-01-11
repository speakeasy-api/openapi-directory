package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetBatchDeleteScheduledActionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetBatchDeleteScheduledActionActionEnum action;
    public GetBatchDeleteScheduledActionQueryParams withAction(GetBatchDeleteScheduledActionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupName")
    public String autoScalingGroupName;
    public GetBatchDeleteScheduledActionQueryParams withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ScheduledActionNames")
    public String[] scheduledActionNames;
    public GetBatchDeleteScheduledActionQueryParams withScheduledActionNames(String[] scheduledActionNames) {
        this.scheduledActionNames = scheduledActionNames;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetBatchDeleteScheduledActionVersionEnum version;
    public GetBatchDeleteScheduledActionQueryParams withVersion(GetBatchDeleteScheduledActionVersionEnum version) {
        this.version = version;
        return this;
    }
}