package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeNodeConfigurationOptionsRequest {
    public PostDescribeNodeConfigurationOptionsQueryParams queryParams;
    public PostDescribeNodeConfigurationOptionsRequest withQueryParams(PostDescribeNodeConfigurationOptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeNodeConfigurationOptionsHeaders headers;
    public PostDescribeNodeConfigurationOptionsRequest withHeaders(PostDescribeNodeConfigurationOptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeNodeConfigurationOptionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}