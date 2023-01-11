package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeUserPoolRequest {
    public DescribeUserPoolHeaders headers;
    public DescribeUserPoolRequest withHeaders(DescribeUserPoolHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeUserPoolRequest request;
    public DescribeUserPoolRequest withRequest(openapisdk.models.shared.DescribeUserPoolRequest request) {
        this.request = request;
        return this;
    }
}