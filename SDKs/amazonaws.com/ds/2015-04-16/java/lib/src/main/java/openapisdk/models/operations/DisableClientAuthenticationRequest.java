package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DisableClientAuthenticationRequest {
    public DisableClientAuthenticationHeaders headers;
    public DisableClientAuthenticationRequest withHeaders(DisableClientAuthenticationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DisableClientAuthenticationRequest request;
    public DisableClientAuthenticationRequest withRequest(openapisdk.models.shared.DisableClientAuthenticationRequest request) {
        this.request = request;
        return this;
    }
}