package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeGroupRequest {
    public DescribeGroupHeaders headers;
    public DescribeGroupRequest withHeaders(DescribeGroupHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeGroupRequest request;
    public DescribeGroupRequest withRequest(openapisdk.models.shared.DescribeGroupRequest request) {
        this.request = request;
        return this;
    }
}