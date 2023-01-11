package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAccountRequest {
    public DescribeAccountHeaders headers;
    public DescribeAccountRequest withHeaders(DescribeAccountHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public java.util.Map<String, Object> request;
    public DescribeAccountRequest withRequest(java.util.Map<String, Object> request) {
        this.request = request;
        return this;
    }
}