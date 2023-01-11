package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateResponsePlanRequest {
    public UpdateResponsePlanHeaders headers;
    public UpdateResponsePlanRequest withHeaders(UpdateResponsePlanHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateResponsePlanRequestBody request;
    public UpdateResponsePlanRequest withRequest(UpdateResponsePlanRequestBody request) {
        this.request = request;
        return this;
    }
}