package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeInterconnectsRequest {
    public DescribeInterconnectsHeaders headers;
    public DescribeInterconnectsRequest withHeaders(DescribeInterconnectsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeInterconnectsRequest request;
    public DescribeInterconnectsRequest withRequest(openapisdk.models.shared.DescribeInterconnectsRequest request) {
        this.request = request;
        return this;
    }
}