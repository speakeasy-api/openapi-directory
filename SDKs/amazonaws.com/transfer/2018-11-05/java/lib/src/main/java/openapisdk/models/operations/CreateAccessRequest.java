package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateAccessRequest {
    public CreateAccessHeaders headers;
    public CreateAccessRequest withHeaders(CreateAccessHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateAccessRequest request;
    public CreateAccessRequest withRequest(openapisdk.models.shared.CreateAccessRequest request) {
        this.request = request;
        return this;
    }
}