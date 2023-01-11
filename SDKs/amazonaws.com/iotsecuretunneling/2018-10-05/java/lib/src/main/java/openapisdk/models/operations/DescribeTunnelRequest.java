package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeTunnelRequest {
    public DescribeTunnelHeaders headers;
    public DescribeTunnelRequest withHeaders(DescribeTunnelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeTunnelRequest request;
    public DescribeTunnelRequest withRequest(openapisdk.models.shared.DescribeTunnelRequest request) {
        this.request = request;
        return this;
    }
}