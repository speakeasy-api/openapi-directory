package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEnvironmentRequest {
    public CreateEnvironmentPathParams pathParams;
    public CreateEnvironmentRequest withPathParams(CreateEnvironmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public CreateEnvironmentRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}