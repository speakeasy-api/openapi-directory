package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeregisterTransitGatewayMulticastGroupSourcesRequest {
    public PostDeregisterTransitGatewayMulticastGroupSourcesQueryParams queryParams;
    public PostDeregisterTransitGatewayMulticastGroupSourcesRequest withQueryParams(PostDeregisterTransitGatewayMulticastGroupSourcesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeregisterTransitGatewayMulticastGroupSourcesHeaders headers;
    public PostDeregisterTransitGatewayMulticastGroupSourcesRequest withHeaders(PostDeregisterTransitGatewayMulticastGroupSourcesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeregisterTransitGatewayMulticastGroupSourcesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}