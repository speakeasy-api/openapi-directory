package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeTrailsRequest {
    public DescribeTrailsHeaders headers;
    public DescribeTrailsRequest withHeaders(DescribeTrailsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeTrailsRequest request;
    public DescribeTrailsRequest withRequest(openapisdk.models.shared.DescribeTrailsRequest request) {
        this.request = request;
        return this;
    }
}