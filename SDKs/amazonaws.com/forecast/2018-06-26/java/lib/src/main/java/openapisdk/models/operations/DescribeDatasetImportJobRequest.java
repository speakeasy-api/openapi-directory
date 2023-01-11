package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDatasetImportJobRequest {
    public DescribeDatasetImportJobHeaders headers;
    public DescribeDatasetImportJobRequest withHeaders(DescribeDatasetImportJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeDatasetImportJobRequest request;
    public DescribeDatasetImportJobRequest withRequest(openapisdk.models.shared.DescribeDatasetImportJobRequest request) {
        this.request = request;
        return this;
    }
}