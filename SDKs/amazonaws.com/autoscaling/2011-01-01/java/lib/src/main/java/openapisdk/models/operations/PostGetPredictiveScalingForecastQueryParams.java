package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostGetPredictiveScalingForecastQueryParams {
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Action")
    public PostGetPredictiveScalingForecastActionEnum action;
    public PostGetPredictiveScalingForecastQueryParams withAction(PostGetPredictiveScalingForecastActionEnum action) {
        this.action = action;
        return this;
    }
    @SpeakeasyMetadata("queryParam:style=form,explode=true,name=Version")
    public PostGetPredictiveScalingForecastVersionEnum version;
    public PostGetPredictiveScalingForecastQueryParams withVersion(PostGetPredictiveScalingForecastVersionEnum version) {
        this.version = version;
        return this;
    }
}