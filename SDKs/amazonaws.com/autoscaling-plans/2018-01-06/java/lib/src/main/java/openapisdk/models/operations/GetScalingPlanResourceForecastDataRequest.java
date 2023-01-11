package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetScalingPlanResourceForecastDataRequest {
    public GetScalingPlanResourceForecastDataHeaders headers;
    public GetScalingPlanResourceForecastDataRequest withHeaders(GetScalingPlanResourceForecastDataHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetScalingPlanResourceForecastDataRequest request;
    public GetScalingPlanResourceForecastDataRequest withRequest(openapisdk.models.shared.GetScalingPlanResourceForecastDataRequest request) {
        this.request = request;
        return this;
    }
}