package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetRandomPasswordRequest {
    public GetRandomPasswordHeaders headers;
    public GetRandomPasswordRequest withHeaders(GetRandomPasswordHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetRandomPasswordRequest request;
    public GetRandomPasswordRequest withRequest(openapisdk.models.shared.GetRandomPasswordRequest request) {
        this.request = request;
        return this;
    }
}