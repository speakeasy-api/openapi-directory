package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRegisterTransitGatewayMulticastGroupSourcesRequest {
    public PostRegisterTransitGatewayMulticastGroupSourcesQueryParams queryParams;
    public PostRegisterTransitGatewayMulticastGroupSourcesRequest withQueryParams(PostRegisterTransitGatewayMulticastGroupSourcesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRegisterTransitGatewayMulticastGroupSourcesHeaders headers;
    public PostRegisterTransitGatewayMulticastGroupSourcesRequest withHeaders(PostRegisterTransitGatewayMulticastGroupSourcesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRegisterTransitGatewayMulticastGroupSourcesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}