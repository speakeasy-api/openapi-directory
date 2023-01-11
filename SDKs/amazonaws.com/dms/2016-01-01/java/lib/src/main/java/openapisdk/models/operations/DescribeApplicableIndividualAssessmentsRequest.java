package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class DescribeApplicableIndividualAssessmentsRequest {
    public DescribeApplicableIndividualAssessmentsQueryParams queryParams;
    public DescribeApplicableIndividualAssessmentsRequest withQueryParams(DescribeApplicableIndividualAssessmentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public DescribeApplicableIndividualAssessmentsHeaders headers;
    public DescribeApplicableIndividualAssessmentsRequest withHeaders(DescribeApplicableIndividualAssessmentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.DescribeApplicableIndividualAssessmentsMessage request;
    public DescribeApplicableIndividualAssessmentsRequest withRequest(openapisdk.models.shared.DescribeApplicableIndividualAssessmentsMessage request) {
        this.request = request;
        return this;
    }
}