package openapisdk.models.operations;



public class UpdateExpirationForHitResponse {
    public String contentType;
    public UpdateExpirationForHitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object requestError;
    public UpdateExpirationForHitResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public Object serviceFault;
    public UpdateExpirationForHitResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public UpdateExpirationForHitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateExpirationForHITResponse;
    public UpdateExpirationForHitResponse withUpdateExpirationForHitResponse(java.util.Map<String, Object> updateExpirationForHITResponse) {
        this.updateExpirationForHITResponse = updateExpirationForHITResponse;
        return this;
    }
}