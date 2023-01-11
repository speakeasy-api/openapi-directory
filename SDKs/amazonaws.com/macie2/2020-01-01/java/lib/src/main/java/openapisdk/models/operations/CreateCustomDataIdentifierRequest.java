package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateCustomDataIdentifierRequest {
    public CreateCustomDataIdentifierHeaders headers;
    public CreateCustomDataIdentifierRequest withHeaders(CreateCustomDataIdentifierHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateCustomDataIdentifierRequestBody request;
    public CreateCustomDataIdentifierRequest withRequest(CreateCustomDataIdentifierRequestBody request) {
        this.request = request;
        return this;
    }
}