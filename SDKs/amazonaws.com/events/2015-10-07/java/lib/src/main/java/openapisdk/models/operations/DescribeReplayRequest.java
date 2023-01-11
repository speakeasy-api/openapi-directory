package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeReplayRequest {
    public DescribeReplayHeaders headers;
    public DescribeReplayRequest withHeaders(DescribeReplayHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeReplayRequest request;
    public DescribeReplayRequest withRequest(openapisdk.models.shared.DescribeReplayRequest request) {
        this.request = request;
        return this;
    }
}