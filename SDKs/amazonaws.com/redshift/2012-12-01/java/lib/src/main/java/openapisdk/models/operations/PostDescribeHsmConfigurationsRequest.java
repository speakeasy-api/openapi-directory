package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeHsmConfigurationsRequest {
    public PostDescribeHsmConfigurationsQueryParams queryParams;
    public PostDescribeHsmConfigurationsRequest withQueryParams(PostDescribeHsmConfigurationsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeHsmConfigurationsHeaders headers;
    public PostDescribeHsmConfigurationsRequest withHeaders(PostDescribeHsmConfigurationsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeHsmConfigurationsRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}