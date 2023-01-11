package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeJobRequest {
    public DescribeJobHeaders headers;
    public DescribeJobRequest withHeaders(DescribeJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeJobRequest request;
    public DescribeJobRequest withRequest(openapisdk.models.shared.DescribeJobRequest request) {
        this.request = request;
        return this;
    }
}