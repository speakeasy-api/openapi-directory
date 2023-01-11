package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetKeyPairRequest {
    public GetKeyPairHeaders headers;
    public GetKeyPairRequest withHeaders(GetKeyPairHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetKeyPairRequest request;
    public GetKeyPairRequest withRequest(openapisdk.models.shared.GetKeyPairRequest request) {
        this.request = request;
        return this;
    }
}