package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeRxNormInferenceJobRequest {
    public DescribeRxNormInferenceJobHeaders headers;
    public DescribeRxNormInferenceJobRequest withHeaders(DescribeRxNormInferenceJobHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeRxNormInferenceJobRequest request;
    public DescribeRxNormInferenceJobRequest withRequest(openapisdk.models.shared.DescribeRxNormInferenceJobRequest request) {
        this.request = request;
        return this;
    }
}