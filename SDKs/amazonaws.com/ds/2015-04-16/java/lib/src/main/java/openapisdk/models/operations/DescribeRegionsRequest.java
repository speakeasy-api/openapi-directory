package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeRegionsRequest {
    public DescribeRegionsHeaders headers;
    public DescribeRegionsRequest withHeaders(DescribeRegionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeRegionsRequest request;
    public DescribeRegionsRequest withRequest(openapisdk.models.shared.DescribeRegionsRequest request) {
        this.request = request;
        return this;
    }
}