package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeUserPoolClientRequest {
    public DescribeUserPoolClientHeaders headers;
    public DescribeUserPoolClientRequest withHeaders(DescribeUserPoolClientHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeUserPoolClientRequest request;
    public DescribeUserPoolClientRequest withRequest(openapisdk.models.shared.DescribeUserPoolClientRequest request) {
        this.request = request;
        return this;
    }
}