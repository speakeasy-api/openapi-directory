package openapisdk.models.operations;



public class DeleteHitResponse {
    public String contentType;
    public DeleteHitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteHITResponse;
    public DeleteHitResponse withDeleteHitResponse(java.util.Map<String, Object> deleteHITResponse) {
        this.deleteHITResponse = deleteHITResponse;
        return this;
    }
    public Object requestError;
    public DeleteHitResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public Object serviceFault;
    public DeleteHitResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public DeleteHitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}