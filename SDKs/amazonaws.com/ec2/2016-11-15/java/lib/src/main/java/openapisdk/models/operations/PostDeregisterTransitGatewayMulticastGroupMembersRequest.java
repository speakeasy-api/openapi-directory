package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDeregisterTransitGatewayMulticastGroupMembersRequest {
    public PostDeregisterTransitGatewayMulticastGroupMembersQueryParams queryParams;
    public PostDeregisterTransitGatewayMulticastGroupMembersRequest withQueryParams(PostDeregisterTransitGatewayMulticastGroupMembersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDeregisterTransitGatewayMulticastGroupMembersHeaders headers;
    public PostDeregisterTransitGatewayMulticastGroupMembersRequest withHeaders(PostDeregisterTransitGatewayMulticastGroupMembersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDeregisterTransitGatewayMulticastGroupMembersRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}