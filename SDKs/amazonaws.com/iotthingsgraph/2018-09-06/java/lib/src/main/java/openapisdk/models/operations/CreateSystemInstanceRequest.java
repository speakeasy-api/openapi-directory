package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateSystemInstanceRequest {
    public CreateSystemInstanceHeaders headers;
    public CreateSystemInstanceRequest withHeaders(CreateSystemInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateSystemInstanceRequest request;
    public CreateSystemInstanceRequest withRequest(openapisdk.models.shared.CreateSystemInstanceRequest request) {
        this.request = request;
        return this;
    }
}