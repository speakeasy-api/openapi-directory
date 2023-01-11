package openapisdk.models.operations;

import java.time.OffsetDateTime;
import openapisdk.utils.SpeakeasyMetadata;

public class GetGetPredictiveScalingForecastQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public GetGetPredictiveScalingForecastActionEnum action;
    public GetGetPredictiveScalingForecastQueryParams withAction(GetGetPredictiveScalingForecastActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=AutoScalingGroupName")
    public String autoScalingGroupName;
    public GetGetPredictiveScalingForecastQueryParams withAutoScalingGroupName(String autoScalingGroupName) {
        this.autoScalingGroupName = autoScalingGroupName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=EndTime")
    public OffsetDateTime endTime;
    public GetGetPredictiveScalingForecastQueryParams withEndTime(OffsetDateTime endTime) {
        this.endTime = endTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=PolicyName")
    public String policyName;
    public GetGetPredictiveScalingForecastQueryParams withPolicyName(String policyName) {
        this.policyName = policyName;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=StartTime")
    public OffsetDateTime startTime;
    public GetGetPredictiveScalingForecastQueryParams withStartTime(OffsetDateTime startTime) {
        this.startTime = startTime;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public GetGetPredictiveScalingForecastVersionEnum version;
    public GetGetPredictiveScalingForecastQueryParams withVersion(GetGetPredictiveScalingForecastVersionEnum version) {
        this.version = version;
        return this;
    }
}