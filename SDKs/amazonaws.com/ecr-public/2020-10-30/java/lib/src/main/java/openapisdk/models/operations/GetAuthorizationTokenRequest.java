package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAuthorizationTokenRequest {
    public GetAuthorizationTokenHeaders headers;
    public GetAuthorizationTokenRequest withHeaders(GetAuthorizationTokenHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public GetAuthorizationTokenRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}