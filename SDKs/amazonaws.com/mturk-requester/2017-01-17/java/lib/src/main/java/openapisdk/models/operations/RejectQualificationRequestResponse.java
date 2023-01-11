package openapisdk.models.operations;



public class RejectQualificationRequestResponse {
    public String contentType;
    public RejectQualificationRequestResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> rejectQualificationRequestResponse;
    public RejectQualificationRequestResponse withRejectQualificationRequestResponse(java.util.Map<String, Object> rejectQualificationRequestResponse) {
        this.rejectQualificationRequestResponse = rejectQualificationRequestResponse;
        return this;
    }
    public Object requestError;
    public RejectQualificationRequestResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public Object serviceFault;
    public RejectQualificationRequestResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public RejectQualificationRequestResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}