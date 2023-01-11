package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateStreamRequest {
    public UpdateStreamPathParams pathParams;
    public UpdateStreamRequest withPathParams(UpdateStreamPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public UpdateStreamHeaders headers;
    public UpdateStreamRequest withHeaders(UpdateStreamHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateStreamRequestBody request;
    public UpdateStreamRequest withRequest(UpdateStreamRequestBody request) {
        this.request = request;
        return this;
    }
}