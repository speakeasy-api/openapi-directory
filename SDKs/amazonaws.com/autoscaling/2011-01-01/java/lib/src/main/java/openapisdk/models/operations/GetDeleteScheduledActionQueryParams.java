package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetDeleteScheduledActionQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetDeleteScheduledActionActionEnum action;
    public GetDeleteScheduledActionQueryParams withAction(GetDeleteScheduledActionActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupName")
    public String autoScalingGroupName;
    public GetDeleteScheduledActionQueryParams withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=ScheduledActionName")
    public String scheduledActionName;
    public GetDeleteScheduledActionQueryParams withScheduledActionName(String scheduledActionName) {
        this.scheduledActionName = scheduledActionName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetDeleteScheduledActionVersionEnum version;
    public GetDeleteScheduledActionQueryParams withVersion(GetDeleteScheduledActionVersionEnum version) {
        this.version = version;
        return this;
    }
}