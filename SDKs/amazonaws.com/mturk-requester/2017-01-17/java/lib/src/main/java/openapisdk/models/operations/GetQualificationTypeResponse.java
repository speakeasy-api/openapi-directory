package openapisdk.models.operations;



public class GetQualificationTypeResponse {
    public String contentType;
    public GetQualificationTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetQualificationTypeResponse getQualificationTypeResponse;
    public GetQualificationTypeResponse withGetQualificationTypeResponse(openapisdk.models.shared.GetQualificationTypeResponse getQualificationTypeResponse) {
        this.getQualificationTypeResponse = getQualificationTypeResponse;
        return this;
    }
    public Object requestError;
    public GetQualificationTypeResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public Object serviceFault;
    public GetQualificationTypeResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public GetQualificationTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}