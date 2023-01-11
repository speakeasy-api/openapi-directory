package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeClientVpnConnectionsRequest {
    public PostDescribeClientVpnConnectionsQueryParams queryParams;
    public PostDescribeClientVpnConnectionsRequest withQueryParams(PostDescribeClientVpnConnectionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeClientVpnConnectionsHeaders headers;
    public PostDescribeClientVpnConnectionsRequest withHeaders(PostDescribeClientVpnConnectionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeClientVpnConnectionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}