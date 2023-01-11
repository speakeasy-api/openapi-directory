package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDocumentClassificationJobRequest {
    public DescribeDocumentClassificationJobHeaders headers;
    public DescribeDocumentClassificationJobRequest withHeaders(DescribeDocumentClassificationJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeDocumentClassificationJobRequest request;
    public DescribeDocumentClassificationJobRequest withRequest(openapisdk.models.shared.DescribeDocumentClassificationJobRequest request) {
        this.request = request;
        return this;
    }
}