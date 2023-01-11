package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeSchemaRequest {
    public DescribeSchemaHeaders headers;
    public DescribeSchemaRequest withHeaders(DescribeSchemaHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeSchemaRequest request;
    public DescribeSchemaRequest withRequest(openapisdk.models.shared.DescribeSchemaRequest request) {
        this.request = request;
        return this;
    }
}