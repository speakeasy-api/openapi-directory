package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class PostDescribeScalingParametersRequest {
    public PostDescribeScalingParametersQueryParams queryParams;
    public PostDescribeScalingParametersRequest withQueryParams(PostDescribeScalingParametersQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public PostDescribeScalingParametersHeaders headers;
    public PostDescribeScalingParametersRequest withHeaders(PostDescribeScalingParametersHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=text/xml")
    public byte[] request;
    public PostDescribeScalingParametersRequest withRequest(byte[] request) {
        this.request = request;
        return this;
    }
}