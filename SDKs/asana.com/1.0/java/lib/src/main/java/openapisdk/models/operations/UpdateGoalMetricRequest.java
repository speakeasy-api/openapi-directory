package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGoalMetricRequest {
    public UpdateGoalMetricPathParams pathParams;
    public UpdateGoalMetricRequest withPathParams(UpdateGoalMetricPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateGoalMetricQueryParams queryParams;
    public UpdateGoalMetricRequest withQueryParams(UpdateGoalMetricQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateGoalMetricRequestBodyInput request;
    public UpdateGoalMetricRequest withRequest(UpdateGoalMetricRequestBodyInput request) {
        this.request = request;
        return this;
    }
}