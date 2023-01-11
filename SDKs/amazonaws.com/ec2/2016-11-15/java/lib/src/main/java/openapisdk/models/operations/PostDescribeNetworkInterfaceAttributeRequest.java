package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeNetworkInterfaceAttributeRequest {
    public PostDescribeNetworkInterfaceAttributeQueryParams queryParams;
    public PostDescribeNetworkInterfaceAttributeRequest withQueryParams(PostDescribeNetworkInterfaceAttributeQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeNetworkInterfaceAttributeHeaders headers;
    public PostDescribeNetworkInterfaceAttributeRequest withHeaders(PostDescribeNetworkInterfaceAttributeHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeNetworkInterfaceAttributeRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}