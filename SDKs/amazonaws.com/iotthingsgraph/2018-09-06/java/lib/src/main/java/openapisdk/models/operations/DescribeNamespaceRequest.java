package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeNamespaceRequest {
    public DescribeNamespaceHeaders headers;
    public DescribeNamespaceRequest withHeaders(DescribeNamespaceHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeNamespaceRequest request;
    public DescribeNamespaceRequest withRequest(openapisdk.models.shared.DescribeNamespaceRequest request) {
        this.request = request;
        return this;
    }
}