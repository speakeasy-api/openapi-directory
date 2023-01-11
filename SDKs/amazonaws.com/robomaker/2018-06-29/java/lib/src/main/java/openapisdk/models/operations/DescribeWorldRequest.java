package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeWorldRequest {
    public DescribeWorldHeaders headers;
    public DescribeWorldRequest withHeaders(DescribeWorldHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeWorldRequestBody request;
    public DescribeWorldRequest withRequest(DescribeWorldRequestBody request) {
        this.request = request;
        return this;
    }
}