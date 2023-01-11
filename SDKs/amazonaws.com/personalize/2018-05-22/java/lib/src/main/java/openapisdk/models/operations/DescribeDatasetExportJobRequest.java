package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDatasetExportJobRequest {
    public DescribeDatasetExportJobHeaders headers;
    public DescribeDatasetExportJobRequest withHeaders(DescribeDatasetExportJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeDatasetExportJobRequest request;
    public DescribeDatasetExportJobRequest withRequest(openapisdk.models.shared.DescribeDatasetExportJobRequest request) {
        this.request = request;
        return this;
    }
}