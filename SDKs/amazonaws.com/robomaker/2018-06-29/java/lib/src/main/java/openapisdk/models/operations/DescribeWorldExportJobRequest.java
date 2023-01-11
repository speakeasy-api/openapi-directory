package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeWorldExportJobRequest {
    public DescribeWorldExportJobHeaders headers;
    public DescribeWorldExportJobRequest withHeaders(DescribeWorldExportJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public DescribeWorldExportJobRequestBody request;
    public DescribeWorldExportJobRequest withRequest(DescribeWorldExportJobRequestBody request) {
        this.request = request;
        return this;
    }
}