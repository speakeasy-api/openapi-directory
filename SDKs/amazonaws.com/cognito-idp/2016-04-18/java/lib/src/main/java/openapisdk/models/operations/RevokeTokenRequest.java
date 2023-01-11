package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class RevokeTokenRequest {
    public RevokeTokenHeaders headers;
    public RevokeTokenRequest withHeaders(RevokeTokenHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.RevokeTokenRequest request;
    public RevokeTokenRequest withRequest(openapisdk.models.shared.RevokeTokenRequest request) {
        this.request = request;
        return this;
    }
}