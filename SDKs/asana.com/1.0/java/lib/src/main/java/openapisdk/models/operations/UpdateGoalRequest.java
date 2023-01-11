package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateGoalRequest {
    public UpdateGoalPathParams pathParams;
    public UpdateGoalRequest withPathParams(UpdateGoalPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateGoalQueryParams queryParams;
    public UpdateGoalRequest withQueryParams(UpdateGoalQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateGoalRequestBodyInput request;
    public UpdateGoalRequest withRequest(UpdateGoalRequestBodyInput request) {
        this.request = request;
        return this;
    }
}