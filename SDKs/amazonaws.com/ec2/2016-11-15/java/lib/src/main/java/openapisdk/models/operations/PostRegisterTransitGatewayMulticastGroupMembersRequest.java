package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostRegisterTransitGatewayMulticastGroupMembersRequest {
    public PostRegisterTransitGatewayMulticastGroupMembersQueryParams queryParams;
    public PostRegisterTransitGatewayMulticastGroupMembersRequest withQueryParams(PostRegisterTransitGatewayMulticastGroupMembersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostRegisterTransitGatewayMulticastGroupMembersHeaders headers;
    public PostRegisterTransitGatewayMulticastGroupMembersRequest withHeaders(PostRegisterTransitGatewayMulticastGroupMembersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostRegisterTransitGatewayMulticastGroupMembersRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}