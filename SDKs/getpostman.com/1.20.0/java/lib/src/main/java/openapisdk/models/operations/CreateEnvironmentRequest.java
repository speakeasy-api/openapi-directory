package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEnvironmentRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateEnvironmentRequestBody request;
    public CreateEnvironmentRequest withRequest(CreateEnvironmentRequestBody request) {
        this.request = request;
        return this;
    }
}