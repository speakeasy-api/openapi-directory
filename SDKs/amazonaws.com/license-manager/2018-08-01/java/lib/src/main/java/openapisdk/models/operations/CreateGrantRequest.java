package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateGrantRequest {
    public CreateGrantHeaders headers;
    public CreateGrantRequest withHeaders(CreateGrantHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateGrantRequest request;
    public CreateGrantRequest withRequest(openapisdk.models.shared.CreateGrantRequest request) {
        this.request = request;
        return this;
    }
}