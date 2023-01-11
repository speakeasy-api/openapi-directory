package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetOpenIdTokenRequest {
    public GetOpenIdTokenHeaders headers;
    public GetOpenIdTokenRequest withHeaders(GetOpenIdTokenHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetOpenIdTokenInput request;
    public GetOpenIdTokenRequest withRequest(openapisdk.models.shared.GetOpenIdTokenInput request) {
        this.request = request;
        return this;
    }
}