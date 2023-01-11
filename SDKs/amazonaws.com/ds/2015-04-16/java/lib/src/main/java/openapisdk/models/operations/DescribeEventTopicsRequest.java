package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeEventTopicsRequest {
    public DescribeEventTopicsHeaders headers;
    public DescribeEventTopicsRequest withHeaders(DescribeEventTopicsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeEventTopicsRequest request;
    public DescribeEventTopicsRequest withRequest(openapisdk.models.shared.DescribeEventTopicsRequest request) {
        this.request = request;
        return this;
    }
}