package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeNetworkInterfacesRequest {
    public PostDescribeNetworkInterfacesQueryParams queryParams;
    public PostDescribeNetworkInterfacesRequest withQueryParams(PostDescribeNetworkInterfacesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeNetworkInterfacesHeaders headers;
    public PostDescribeNetworkInterfacesRequest withHeaders(PostDescribeNetworkInterfacesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeNetworkInterfacesRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}