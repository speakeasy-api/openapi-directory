package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateEmailIdentityRequest {
    public CreateEmailIdentityHeaders headers;
    public CreateEmailIdentityRequest withHeaders(CreateEmailIdentityHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public CreateEmailIdentityRequestBody request;
    public CreateEmailIdentityRequest withRequest(CreateEmailIdentityRequestBody request) {
        this.request = request;
        return this;
    }
}