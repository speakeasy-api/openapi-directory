package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateStudioRequest {
    public CreateStudioHeaders headers;
    public CreateStudioRequest withHeaders(CreateStudioHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateStudioRequestBody request;
    public CreateStudioRequest withRequest(CreateStudioRequestBody request) {
        this.request = request;
        return this;
    }
}