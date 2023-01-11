package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class GetAccessTokenRequest {
    public GetAccessTokenHeaders headers;
    public GetAccessTokenRequest withHeaders(GetAccessTokenHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.GetAccessTokenRequest request;
    public GetAccessTokenRequest withRequest(openapisdk.models.shared.GetAccessTokenRequest request) {
        this.request = request;
        return this;
    }
}