package openapisdk.models.operations;



public class GetQualificationScoreResponse {
    public String contentType;
    public GetQualificationScoreResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetQualificationScoreResponse getQualificationScoreResponse;
    public GetQualificationScoreResponse withGetQualificationScoreResponse(openapisdk.models.shared.GetQualificationScoreResponse getQualificationScoreResponse) {
        this.getQualificationScoreResponse = getQualificationScoreResponse;
        return this;
    }
    public Object requestError;
    public GetQualificationScoreResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public Object serviceFault;
    public GetQualificationScoreResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public GetQualificationScoreResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}