package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateIntentRequest {
    public UpdateIntentPathParams pathParams;
    public UpdateIntentRequest withPathParams(UpdateIntentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateIntentHeaders headers;
    public UpdateIntentRequest withHeaders(UpdateIntentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateIntentRequestBody request;
    public UpdateIntentRequest withRequest(UpdateIntentRequestBody request) {
        this.request = request;
        return this;
    }
}