package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class UpdateEnvironmentRequest {
    public UpdateEnvironmentPathParams pathParams;
    public UpdateEnvironmentRequest withPathParams(UpdateEnvironmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public UpdateEnvironmentRequestBody request;
    public UpdateEnvironmentRequest withRequest(UpdateEnvironmentRequestBody request) {
        this.request = request;
        return this;
    }
}