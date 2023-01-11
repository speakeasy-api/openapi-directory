package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetChangeTokenRequest {
    public GetChangeTokenHeaders headers;
    public GetChangeTokenRequest withHeaders(GetChangeTokenHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public GetChangeTokenRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}