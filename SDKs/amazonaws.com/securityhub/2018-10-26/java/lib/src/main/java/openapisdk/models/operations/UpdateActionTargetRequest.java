package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateActionTargetRequest {
    public UpdateActionTargetPathParams pathParams;
    public UpdateActionTargetRequest withPathParams(UpdateActionTargetPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateActionTargetHeaders headers;
    public UpdateActionTargetRequest withHeaders(UpdateActionTargetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateActionTargetRequestBody request;
    public UpdateActionTargetRequest withRequest(UpdateActionTargetRequestBody request) {
        this.request = request;
        return this;
    }
}