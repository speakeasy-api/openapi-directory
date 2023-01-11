package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeMatchmakingRequest {
    public DescribeMatchmakingHeaders headers;
    public DescribeMatchmakingRequest withHeaders(DescribeMatchmakingHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeMatchmakingInput request;
    public DescribeMatchmakingRequest withRequest(openapisdk.models.shared.DescribeMatchmakingInput request) {
        this.request = request;
        return this;
    }
}