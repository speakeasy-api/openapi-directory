package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeConfigurationSetRequest {
    public PostDescribeConfigurationSetQueryParams queryParams;
    public PostDescribeConfigurationSetRequest withQueryParams(PostDescribeConfigurationSetQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeConfigurationSetHeaders headers;
    public PostDescribeConfigurationSetRequest withHeaders(PostDescribeConfigurationSetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeConfigurationSetRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}