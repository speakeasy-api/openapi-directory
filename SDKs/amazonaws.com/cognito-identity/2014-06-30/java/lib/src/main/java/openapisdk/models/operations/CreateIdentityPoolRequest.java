package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateIdentityPoolRequest {
    public CreateIdentityPoolHeaders headers;
    public CreateIdentityPoolRequest withHeaders(CreateIdentityPoolHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateIdentityPoolInput request;
    public CreateIdentityPoolRequest withRequest(openapisdk.models.shared.CreateIdentityPoolInput request) {
        this.request = request;
        return this;
    }
}