package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeClientVpnRoutesRequest {
    public PostDescribeClientVpnRoutesQueryParams queryParams;
    public PostDescribeClientVpnRoutesRequest withQueryParams(PostDescribeClientVpnRoutesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeClientVpnRoutesHeaders headers;
    public PostDescribeClientVpnRoutesRequest withHeaders(PostDescribeClientVpnRoutesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeClientVpnRoutesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}