package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateProjectVersionRequest {
    public CreateProjectVersionHeaders headers;
    public CreateProjectVersionRequest withHeaders(CreateProjectVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateProjectVersionRequest request;
    public CreateProjectVersionRequest withRequest(openapisdk.models.shared.CreateProjectVersionRequest request) {
        this.request = request;
        return this;
    }
}