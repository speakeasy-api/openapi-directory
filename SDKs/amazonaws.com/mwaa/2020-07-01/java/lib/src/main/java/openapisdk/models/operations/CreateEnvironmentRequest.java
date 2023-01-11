package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEnvironmentRequest {
    public CreateEnvironmentPathParams pathParams;
    public CreateEnvironmentRequest withPathParams(CreateEnvironmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public CreateEnvironmentHeaders headers;
    public CreateEnvironmentRequest withHeaders(CreateEnvironmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateEnvironmentRequestBody request;
    public CreateEnvironmentRequest withRequest(CreateEnvironmentRequestBody request) {
        this.request = request;
        return this;
    }
}