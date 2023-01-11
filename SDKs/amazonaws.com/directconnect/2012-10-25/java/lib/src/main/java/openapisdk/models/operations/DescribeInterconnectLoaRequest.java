package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeInterconnectLoaRequest {
    public DescribeInterconnectLoaHeaders headers;
    public DescribeInterconnectLoaRequest withHeaders(DescribeInterconnectLoaHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeInterconnectLoaRequest request;
    public DescribeInterconnectLoaRequest withRequest(openapisdk.models.shared.DescribeInterconnectLoaRequest request) {
        this.request = request;
        return this;
    }
}