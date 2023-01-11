package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAssessmentTargetsRequest {
    public DescribeAssessmentTargetsHeaders headers;
    public DescribeAssessmentTargetsRequest withHeaders(DescribeAssessmentTargetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeAssessmentTargetsRequest request;
    public DescribeAssessmentTargetsRequest withRequest(openapisdk.models.shared.DescribeAssessmentTargetsRequest request) {
        this.request = request;
        return this;
    }
}