package openapisdk.models.operations;



public class UpdateHitTypeOfHitResponse {
    public String contentType;
    public UpdateHitTypeOfHitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object requestError;
    public UpdateHitTypeOfHitResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public Object serviceFault;
    public UpdateHitTypeOfHitResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public UpdateHitTypeOfHitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateHITTypeOfHITResponse;
    public UpdateHitTypeOfHitResponse withUpdateHitTypeOfHitResponse(java.util.Map<String, Object> updateHITTypeOfHITResponse) {
        this.updateHITTypeOfHITResponse = updateHITTypeOfHITResponse;
        return this;
    }
}