package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProjectRequest {
    public CreateProjectHeaders headers;
    public CreateProjectRequest withHeaders(CreateProjectHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateProjectRequest request;
    public CreateProjectRequest withRequest(openapisdk.models.shared.CreateProjectRequest request) {
        this.request = request;
        return this;
    }
}