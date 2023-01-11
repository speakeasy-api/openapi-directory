package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeApplicationStateRequest {
    public DescribeApplicationStateHeaders headers;
    public DescribeApplicationStateRequest withHeaders(DescribeApplicationStateHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeApplicationStateRequest request;
    public DescribeApplicationStateRequest withRequest(openapisdk.models.shared.DescribeApplicationStateRequest request) {
        this.request = request;
        return this;
    }
}