package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeFeatureTransformationRequest {
    public DescribeFeatureTransformationHeaders headers;
    public DescribeFeatureTransformationRequest withHeaders(DescribeFeatureTransformationHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeFeatureTransformationRequest request;
    public DescribeFeatureTransformationRequest withRequest(openapisdk.models.shared.DescribeFeatureTransformationRequest request) {
        this.request = request;
        return this;
    }
}