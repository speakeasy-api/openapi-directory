package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeInferenceSchedulerRequest {
    public DescribeInferenceSchedulerHeaders headers;
    public DescribeInferenceSchedulerRequest withHeaders(DescribeInferenceSchedulerHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeInferenceSchedulerRequest request;
    public DescribeInferenceSchedulerRequest withRequest(openapisdk.models.shared.DescribeInferenceSchedulerRequest request) {
        this.request = request;
        return this;
    }
}