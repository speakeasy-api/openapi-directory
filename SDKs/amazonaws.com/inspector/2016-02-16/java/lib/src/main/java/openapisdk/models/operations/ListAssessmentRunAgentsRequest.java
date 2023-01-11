package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAssessmentRunAgentsRequest {
    public ListAssessmentRunAgentsQueryParams queryParams;
    public ListAssessmentRunAgentsRequest withQueryParams(ListAssessmentRunAgentsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAssessmentRunAgentsHeaders headers;
    public ListAssessmentRunAgentsRequest withHeaders(ListAssessmentRunAgentsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListAssessmentRunAgentsRequest request;
    public ListAssessmentRunAgentsRequest withRequest(openapisdk.models.shared.ListAssessmentRunAgentsRequest request) {
        this.request = request;
        return this;
    }
}