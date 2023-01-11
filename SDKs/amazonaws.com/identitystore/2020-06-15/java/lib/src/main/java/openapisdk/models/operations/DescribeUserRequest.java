package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeUserRequest {
    public DescribeUserHeaders headers;
    public DescribeUserRequest withHeaders(DescribeUserHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeUserRequest request;
    public DescribeUserRequest withRequest(openapisdk.models.shared.DescribeUserRequest request) {
        this.request = request;
        return this;
    }
}