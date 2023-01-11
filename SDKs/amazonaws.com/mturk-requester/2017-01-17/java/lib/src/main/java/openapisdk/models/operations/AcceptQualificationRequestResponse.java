package openapisdk.models.operations;



public class AcceptQualificationRequestResponse {
    public java.util.Map<String, Object> acceptQualificationRequestResponse;
    public AcceptQualificationRequestResponse withAcceptQualificationRequestResponse(java.util.Map<String, Object> acceptQualificationRequestResponse) {
        this.acceptQualificationRequestResponse = acceptQualificationRequestResponse;
        return this;
    }
    public String contentType;
    public AcceptQualificationRequestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object requestError;
    public AcceptQualificationRequestResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public Object serviceFault;
    public AcceptQualificationRequestResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public AcceptQualificationRequestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}