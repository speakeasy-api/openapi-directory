package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeClientVpnEndpointsRequest {
    public PostDescribeClientVpnEndpointsQueryParams queryParams;
    public PostDescribeClientVpnEndpointsRequest withQueryParams(PostDescribeClientVpnEndpointsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeClientVpnEndpointsHeaders headers;
    public PostDescribeClientVpnEndpointsRequest withHeaders(PostDescribeClientVpnEndpointsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeClientVpnEndpointsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}