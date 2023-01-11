package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeApplicationVersionRequest {
    public DescribeApplicationVersionHeaders headers;
    public DescribeApplicationVersionRequest withHeaders(DescribeApplicationVersionHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeApplicationVersionRequest request;
    public DescribeApplicationVersionRequest withRequest(openapisdk.models.shared.DescribeApplicationVersionRequest request) {
        this.request = request;
        return this;
    }
}