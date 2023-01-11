package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeAssessmentTemplatesRequest {
    public DescribeAssessmentTemplatesHeaders headers;
    public DescribeAssessmentTemplatesRequest withHeaders(DescribeAssessmentTemplatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeAssessmentTemplatesRequest request;
    public DescribeAssessmentTemplatesRequest withRequest(openapisdk.models.shared.DescribeAssessmentTemplatesRequest request) {
        this.request = request;
        return this;
    }
}