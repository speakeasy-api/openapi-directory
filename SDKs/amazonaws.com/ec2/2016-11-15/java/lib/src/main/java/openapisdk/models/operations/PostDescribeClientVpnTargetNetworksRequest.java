package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeClientVpnTargetNetworksRequest {
    public PostDescribeClientVpnTargetNetworksQueryParams queryParams;
    public PostDescribeClientVpnTargetNetworksRequest withQueryParams(PostDescribeClientVpnTargetNetworksQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeClientVpnTargetNetworksHeaders headers;
    public PostDescribeClientVpnTargetNetworksRequest withHeaders(PostDescribeClientVpnTargetNetworksHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeClientVpnTargetNetworksRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}