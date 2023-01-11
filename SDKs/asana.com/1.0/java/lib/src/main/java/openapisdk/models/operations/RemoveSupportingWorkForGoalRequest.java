package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RemoveSupportingWorkForGoalRequest {
    public RemoveSupportingWorkForGoalPathParams pathParams;
    public RemoveSupportingWorkForGoalRequest withPathParams(RemoveSupportingWorkForGoalPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public RemoveSupportingWorkForGoalQueryParams queryParams;
    public RemoveSupportingWorkForGoalRequest withQueryParams(RemoveSupportingWorkForGoalQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RemoveSupportingWorkForGoalRequestBody request;
    public RemoveSupportingWorkForGoalRequest withRequest(RemoveSupportingWorkForGoalRequestBody request) {
        this.request = request;
        return this;
    }
}