package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeGameSessionPlacementRequest {
    public DescribeGameSessionPlacementHeaders headers;
    public DescribeGameSessionPlacementRequest withHeaders(DescribeGameSessionPlacementHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeGameSessionPlacementInput request;
    public DescribeGameSessionPlacementRequest withRequest(openapisdk.models.shared.DescribeGameSessionPlacementInput request) {
        this.request = request;
        return this;
    }
}