package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateMockRequest {
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateMockRequestBody request;
    public CreateMockRequest withRequest(CreateMockRequestBody request) {
        this.request = request;
        return this;
    }
}