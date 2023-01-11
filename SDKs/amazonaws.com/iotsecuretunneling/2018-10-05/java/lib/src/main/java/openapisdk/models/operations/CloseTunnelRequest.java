package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class CloseTunnelRequest {
    public CloseTunnelHeaders headers;
    public CloseTunnelRequest withHeaders(CloseTunnelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.CloseTunnelRequest request;
    public CloseTunnelRequest withRequest(openapisdk.models.shared.CloseTunnelRequest request) {
        this.request = request;
        return this;
    }
}