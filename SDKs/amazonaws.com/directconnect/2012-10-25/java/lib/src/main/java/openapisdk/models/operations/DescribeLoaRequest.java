package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeLoaRequest {
    public DescribeLoaHeaders headers;
    public DescribeLoaRequest withHeaders(DescribeLoaHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeLoaRequest request;
    public DescribeLoaRequest withRequest(openapisdk.models.shared.DescribeLoaRequest request) {
        this.request = request;
        return this;
    }
}