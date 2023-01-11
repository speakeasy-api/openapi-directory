package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTaskSetRequest {
    public CreateTaskSetHeaders headers;
    public CreateTaskSetRequest withHeaders(CreateTaskSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateTaskSetRequest request;
    public CreateTaskSetRequest withRequest(openapisdk.models.shared.CreateTaskSetRequest request) {
        this.request = request;
        return this;
    }
}