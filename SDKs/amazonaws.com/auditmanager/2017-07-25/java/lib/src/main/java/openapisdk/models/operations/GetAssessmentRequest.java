package openapisdk.models.operations;



public class GetAssessmentRequest {
    public GetAssessmentPathParams pathParams;
    public GetAssessmentRequest withPathParams(GetAssessmentPathParams pathParams) {
        this.pathParams = pathParams;
        return this;
    }
    public GetAssessmentHeaders headers;
    public GetAssessmentRequest withHeaders(GetAssessmentHeaders headers) {
        this.headers = headers;
        return this;
    }
}