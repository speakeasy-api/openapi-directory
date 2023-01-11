package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class AddSupportingWorkForGoalRequest {
    public AddSupportingWorkForGoalPathParams pathParams;
    public AddSupportingWorkForGoalRequest withPathParams(AddSupportingWorkForGoalPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public AddSupportingWorkForGoalQueryParams queryParams;
    public AddSupportingWorkForGoalRequest withQueryParams(AddSupportingWorkForGoalQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public AddSupportingWorkForGoalRequestBody request;
    public AddSupportingWorkForGoalRequest withRequest(AddSupportingWorkForGoalRequestBody request) {
        this.request = request;
        return this;
    }
}