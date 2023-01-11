package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeRefreshSchemasStatusRequest {
    public DescribeRefreshSchemasStatusHeaders headers;
    public DescribeRefreshSchemasStatusRequest withHeaders(DescribeRefreshSchemasStatusHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeRefreshSchemasStatusMessage request;
    public DescribeRefreshSchemasStatusRequest withRequest(openapisdk.models.shared.DescribeRefreshSchemasStatusMessage request) {
        this.request = request;
        return this;
    }
}