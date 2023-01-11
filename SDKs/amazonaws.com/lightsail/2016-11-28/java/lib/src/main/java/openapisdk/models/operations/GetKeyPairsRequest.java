package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetKeyPairsRequest {
    public GetKeyPairsHeaders headers;
    public GetKeyPairsRequest withHeaders(GetKeyPairsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetKeyPairsRequest request;
    public GetKeyPairsRequest withRequest(openapisdk.models.shared.GetKeyPairsRequest request) {
        this.request = request;
        return this;
    }
}