package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateServerRequest {
    public CreateServerHeaders headers;
    public CreateServerRequest withHeaders(CreateServerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateServerRequest request;
    public CreateServerRequest withRequest(openapisdk.models.shared.CreateServerRequest request) {
        this.request = request;
        return this;
    }
}