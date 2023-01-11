package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAuthorizationTokenRequest {
    public GetAuthorizationTokenHeaders headers;
    public GetAuthorizationTokenRequest withHeaders(GetAuthorizationTokenHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetAuthorizationTokenRequest request;
    public GetAuthorizationTokenRequest withRequest(openapisdk.models.shared.GetAuthorizationTokenRequest request) {
        this.request = request;
        return this;
    }
}