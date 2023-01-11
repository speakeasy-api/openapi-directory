package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateTaskRequest {
    public CreateTaskHeaders headers;
    public CreateTaskRequest withHeaders(CreateTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateTaskRequest request;
    public CreateTaskRequest withRequest(openapisdk.models.shared.CreateTaskRequest request) {
        this.request = request;
        return this;
    }
    public CreateTaskSecurity security;
    public CreateTaskRequest withSecurity(CreateTaskSecurity security) {
        this.security = security;
        return this;
    }
}