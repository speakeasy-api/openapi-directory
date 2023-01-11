package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInventoryTaskRequest {
    public CreateInventoryTaskHeaders headers;
    public CreateInventoryTaskRequest withHeaders(CreateInventoryTaskHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateInventoryTaskRequest request;
    public CreateInventoryTaskRequest withRequest(openapisdk.models.shared.CreateInventoryTaskRequest request) {
        this.request = request;
        return this;
    }
    public CreateInventoryTaskSecurity security;
    public CreateInventoryTaskRequest withSecurity(CreateInventoryTaskSecurity security) {
        this.security = security;
        return this;
    }
}