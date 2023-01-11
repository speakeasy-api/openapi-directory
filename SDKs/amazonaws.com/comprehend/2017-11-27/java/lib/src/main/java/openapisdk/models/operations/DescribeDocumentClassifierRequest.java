package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeDocumentClassifierRequest {
    public DescribeDocumentClassifierHeaders headers;
    public DescribeDocumentClassifierRequest withHeaders(DescribeDocumentClassifierHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeDocumentClassifierRequest request;
    public DescribeDocumentClassifierRequest withRequest(openapisdk.models.shared.DescribeDocumentClassifierRequest request) {
        this.request = request;
        return this;
    }
}