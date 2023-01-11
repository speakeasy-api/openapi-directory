package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDatasetRequest {
    public DescribeDatasetHeaders headers;
    public DescribeDatasetRequest withHeaders(DescribeDatasetHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeDatasetRequest request;
    public DescribeDatasetRequest withRequest(openapisdk.models.shared.DescribeDatasetRequest request) {
        this.request = request;
        return this;
    }
}