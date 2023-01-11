package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateResponsePlanRequest {
    public CreateResponsePlanHeaders headers;
    public CreateResponsePlanRequest withHeaders(CreateResponsePlanHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateResponsePlanRequestBody request;
    public CreateResponsePlanRequest withRequest(CreateResponsePlanRequestBody request) {
        this.request = request;
        return this;
    }
}