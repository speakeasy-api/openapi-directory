package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateInstanceRequest {
    public CreateInstanceHeaders headers;
    public CreateInstanceRequest withHeaders(CreateInstanceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateInstanceRequest request;
    public CreateInstanceRequest withRequest(openapisdk.models.shared.CreateInstanceRequest request) {
        this.request = request;
        return this;
    }
}