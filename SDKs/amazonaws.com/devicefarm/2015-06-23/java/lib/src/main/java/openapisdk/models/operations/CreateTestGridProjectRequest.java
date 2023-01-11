package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTestGridProjectRequest {
    public CreateTestGridProjectHeaders headers;
    public CreateTestGridProjectRequest withHeaders(CreateTestGridProjectHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateTestGridProjectRequest request;
    public CreateTestGridProjectRequest withRequest(openapisdk.models.shared.CreateTestGridProjectRequest request) {
        this.request = request;
        return this;
    }
}