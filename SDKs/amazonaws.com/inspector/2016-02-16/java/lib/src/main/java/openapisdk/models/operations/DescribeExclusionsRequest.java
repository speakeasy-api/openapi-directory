package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeExclusionsRequest {
    public DescribeExclusionsHeaders headers;
    public DescribeExclusionsRequest withHeaders(DescribeExclusionsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeExclusionsRequest request;
    public DescribeExclusionsRequest withRequest(openapisdk.models.shared.DescribeExclusionsRequest request) {
        this.request = request;
        return this;
    }
}