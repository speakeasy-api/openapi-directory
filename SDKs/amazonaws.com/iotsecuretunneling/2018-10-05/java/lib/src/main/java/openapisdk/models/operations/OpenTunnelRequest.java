package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class OpenTunnelRequest {
    public OpenTunnelHeaders headers;
    public OpenTunnelRequest withHeaders(OpenTunnelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.OpenTunnelRequest request;
    public OpenTunnelRequest withRequest(openapisdk.models.shared.OpenTunnelRequest request) {
        this.request = request;
        return this;
    }
}