package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProjectRequest {
    public CreateProjectHeaders headers;
    public CreateProjectRequest withHeaders(CreateProjectHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateProjectRequestBody request;
    public CreateProjectRequest withRequest(CreateProjectRequestBody request) {
        this.request = request;
        return this;
    }
}