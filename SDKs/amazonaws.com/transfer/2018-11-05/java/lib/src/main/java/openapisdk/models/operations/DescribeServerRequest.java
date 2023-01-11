package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeServerRequest {
    public DescribeServerHeaders headers;
    public DescribeServerRequest withHeaders(DescribeServerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeServerRequest request;
    public DescribeServerRequest withRequest(openapisdk.models.shared.DescribeServerRequest request) {
        this.request = request;
        return this;
    }
}