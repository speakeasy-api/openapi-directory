package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAssessmentRunsRequest {
    public DescribeAssessmentRunsHeaders headers;
    public DescribeAssessmentRunsRequest withHeaders(DescribeAssessmentRunsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeAssessmentRunsRequest request;
    public DescribeAssessmentRunsRequest withRequest(openapisdk.models.shared.DescribeAssessmentRunsRequest request) {
        this.request = request;
        return this;
    }
}