package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateOrderTaskRequest {
    public CreateOrderTaskHeaders headers;
    public CreateOrderTaskRequest withHeaders(CreateOrderTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateOrderTaskRequest request;
    public CreateOrderTaskRequest withRequest(openapisdk.models.shared.CreateOrderTaskRequest request) {
        this.request = request;
        return this;
    }
    public CreateOrderTaskSecurity security;
    public CreateOrderTaskRequest withSecurity(CreateOrderTaskSecurity security) {
        this.security = security;
        return this;
    }
}