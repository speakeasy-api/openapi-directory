package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeConfigurationOptionsRequest {
    public PostDescribeConfigurationOptionsQueryParams queryParams;
    public PostDescribeConfigurationOptionsRequest withQueryParams(PostDescribeConfigurationOptionsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeConfigurationOptionsHeaders headers;
    public PostDescribeConfigurationOptionsRequest withHeaders(PostDescribeConfigurationOptionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeConfigurationOptionsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}