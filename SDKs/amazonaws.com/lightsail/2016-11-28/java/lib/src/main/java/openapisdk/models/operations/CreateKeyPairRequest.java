package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CreateKeyPairRequest {
    public CreateKeyPairHeaders headers;
    public CreateKeyPairRequest withHeaders(CreateKeyPairHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CreateKeyPairRequest request;
    public CreateKeyPairRequest withRequest(openapisdk.models.shared.CreateKeyPairRequest request) {
        this.request = request;
        return this;
    }
}