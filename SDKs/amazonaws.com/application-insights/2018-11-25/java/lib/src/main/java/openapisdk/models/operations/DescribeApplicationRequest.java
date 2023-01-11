package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeApplicationRequest {
    public DescribeApplicationHeaders headers;
    public DescribeApplicationRequest withHeaders(DescribeApplicationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeApplicationRequest request;
    public DescribeApplicationRequest withRequest(openapisdk.models.shared.DescribeApplicationRequest request) {
        this.request = request;
        return this;
    }
}