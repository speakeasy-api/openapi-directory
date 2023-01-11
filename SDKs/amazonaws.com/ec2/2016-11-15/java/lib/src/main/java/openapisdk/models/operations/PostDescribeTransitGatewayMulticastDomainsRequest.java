package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeTransitGatewayMulticastDomainsRequest {
    public PostDescribeTransitGatewayMulticastDomainsQueryParams queryParams;
    public PostDescribeTransitGatewayMulticastDomainsRequest withQueryParams(PostDescribeTransitGatewayMulticastDomainsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeTransitGatewayMulticastDomainsHeaders headers;
    public PostDescribeTransitGatewayMulticastDomainsRequest withHeaders(PostDescribeTransitGatewayMulticastDomainsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeTransitGatewayMulticastDomainsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}