package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetTokenRequest {
    public GetTokenHeaders headers;
    public GetTokenRequest withHeaders(GetTokenHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetTokenRequest request;
    public GetTokenRequest withRequest(openapisdk.models.shared.GetTokenRequest request) {
        this.request = request;
        return this;
    }
}