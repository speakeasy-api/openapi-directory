package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGoalRequest {
    public CreateGoalQueryParams queryParams;
    public CreateGoalRequest withQueryParams(CreateGoalQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateGoalRequestBodyInput request;
    public CreateGoalRequest withRequest(CreateGoalRequestBodyInput request) {
        this.request = request;
        return this;
    }
}