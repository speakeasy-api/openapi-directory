package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEnvironmentRequest {
    public CreateEnvironmentHeaders headers;
    public CreateEnvironmentRequest withHeaders(CreateEnvironmentHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateEnvironmentInput request;
    public CreateEnvironmentRequest withRequest(openapisdk.models.shared.CreateEnvironmentInput request) {
        this.request = request;
        return this;
    }
}