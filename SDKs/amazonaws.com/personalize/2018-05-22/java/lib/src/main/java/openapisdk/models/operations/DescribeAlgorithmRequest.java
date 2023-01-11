package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAlgorithmRequest {
    public DescribeAlgorithmHeaders headers;
    public DescribeAlgorithmRequest withHeaders(DescribeAlgorithmHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeAlgorithmRequest request;
    public DescribeAlgorithmRequest withRequest(openapisdk.models.shared.DescribeAlgorithmRequest request) {
        this.request = request;
        return this;
    }
}