package openapisdk.models.operations;

import openapisdk.utils.SpeakeasyMetadata;

public class ListAssessmentTemplatesRequest {
    public ListAssessmentTemplatesQueryParams queryParams;
    public ListAssessmentTemplatesRequest withQueryParams(ListAssessmentTemplatesQueryParams queryParams) {
        this.queryParams = queryParams;
        return this;
    }
    public ListAssessmentTemplatesHeaders headers;
    public ListAssessmentTemplatesRequest withHeaders(ListAssessmentTemplatesHeaders headers) {
        this.headers = headers;
        return this;
    }
    @SpeakeasyMetadata("request:mediaType=application/json")
    public openapisdk.models.shared.ListAssessmentTemplatesRequest request;
    public ListAssessmentTemplatesRequest withRequest(openapisdk.models.shared.ListAssessmentTemplatesRequest request) {
        this.request = request;
        return this;
    }
}