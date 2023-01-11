package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RegisterThingRequest {
    public RegisterThingHeaders headers;
    public RegisterThingRequest withHeaders(RegisterThingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public RegisterThingRequestBody request;
    public RegisterThingRequest withRequest(RegisterThingRequestBody request) {
        this.request = request;
        return this;
    }
}