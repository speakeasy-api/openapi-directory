package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeVpnConnectionsRequest {
    public PostDescribeVpnConnectionsQueryParams queryParams;
    public PostDescribeVpnConnectionsRequest withQueryParams(PostDescribeVpnConnectionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeVpnConnectionsHeaders headers;
    public PostDescribeVpnConnectionsRequest withHeaders(PostDescribeVpnConnectionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeVpnConnectionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}