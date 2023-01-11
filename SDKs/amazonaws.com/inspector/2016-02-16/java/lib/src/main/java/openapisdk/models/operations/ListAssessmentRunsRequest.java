package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAssessmentRunsRequest {
    public ListAssessmentRunsQueryParams queryParams;
    public ListAssessmentRunsRequest withQueryParams(ListAssessmentRunsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAssessmentRunsHeaders headers;
    public ListAssessmentRunsRequest withHeaders(ListAssessmentRunsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListAssessmentRunsRequest request;
    public ListAssessmentRunsRequest withRequest(openapisdk.models.shared.ListAssessmentRunsRequest request) {
        this.request = request;
        return this;
    }
}