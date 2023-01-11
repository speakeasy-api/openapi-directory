package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeModelRequest {
    public DescribeModelHeaders headers;
    public DescribeModelRequest withHeaders(DescribeModelHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeModelRequest request;
    public DescribeModelRequest withRequest(openapisdk.models.shared.DescribeModelRequest request) {
        this.request = request;
        return this;
    }
}