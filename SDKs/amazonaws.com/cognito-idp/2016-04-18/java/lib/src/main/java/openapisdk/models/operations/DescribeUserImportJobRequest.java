package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeUserImportJobRequest {
    public DescribeUserImportJobHeaders headers;
    public DescribeUserImportJobRequest withHeaders(DescribeUserImportJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeUserImportJobRequest request;
    public DescribeUserImportJobRequest withRequest(openapisdk.models.shared.DescribeUserImportJobRequest request) {
        this.request = request;
        return this;
    }
}