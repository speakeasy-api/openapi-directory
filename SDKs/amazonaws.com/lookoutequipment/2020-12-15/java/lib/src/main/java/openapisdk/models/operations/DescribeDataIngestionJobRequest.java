package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDataIngestionJobRequest {
    public DescribeDataIngestionJobHeaders headers;
    public DescribeDataIngestionJobRequest withHeaders(DescribeDataIngestionJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeDataIngestionJobRequest request;
    public DescribeDataIngestionJobRequest withRequest(openapisdk.models.shared.DescribeDataIngestionJobRequest request) {
        this.request = request;
        return this;
    }
}