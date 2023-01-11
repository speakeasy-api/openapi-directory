package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostSearchTransitGatewayMulticastGroupsRequest {
    public PostSearchTransitGatewayMulticastGroupsQueryParams queryParams;
    public PostSearchTransitGatewayMulticastGroupsRequest withQueryParams(PostSearchTransitGatewayMulticastGroupsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostSearchTransitGatewayMulticastGroupsHeaders headers;
    public PostSearchTransitGatewayMulticastGroupsRequest withHeaders(PostSearchTransitGatewayMulticastGroupsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostSearchTransitGatewayMulticastGroupsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}