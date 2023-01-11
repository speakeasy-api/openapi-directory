package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DeleteResponsePlanRequest {
    public DeleteResponsePlanHeaders headers;
    public DeleteResponsePlanRequest withHeaders(DeleteResponsePlanHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DeleteResponsePlanRequestBody request;
    public DeleteResponsePlanRequest withRequest(DeleteResponsePlanRequestBody request) {
        this.request = request;
        return this;
    }
}