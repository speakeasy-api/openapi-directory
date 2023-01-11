package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class EnableClientAuthenticationRequest {
    public EnableClientAuthenticationHeaders headers;
    public EnableClientAuthenticationRequest withHeaders(EnableClientAuthenticationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.EnableClientAuthenticationRequest request;
    public EnableClientAuthenticationRequest withRequest(openapisdk.models.shared.EnableClientAuthenticationRequest request) {
        this.request = request;
        return this;
    }
}