package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAssessmentTargetsRequest {
    public ListAssessmentTargetsQueryParams queryParams;
    public ListAssessmentTargetsRequest withQueryParams(ListAssessmentTargetsQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAssessmentTargetsHeaders headers;
    public ListAssessmentTargetsRequest withHeaders(ListAssessmentTargetsHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListAssessmentTargetsRequest request;
    public ListAssessmentTargetsRequest withRequest(openapisdk.models.shared.ListAssessmentTargetsRequest request) {
        this.request = request;
        return this;
    }
}