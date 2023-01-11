package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateWorldGenerationJobRequest {
    public CreateWorldGenerationJobHeaders headers;
    public CreateWorldGenerationJobRequest withHeaders(CreateWorldGenerationJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateWorldGenerationJobRequestBody request;
    public CreateWorldGenerationJobRequest withRequest(CreateWorldGenerationJobRequestBody request) {
        this.request = request;
        return this;
    }
}