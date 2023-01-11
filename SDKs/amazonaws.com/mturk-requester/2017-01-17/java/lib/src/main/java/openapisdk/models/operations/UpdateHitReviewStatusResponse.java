package openapisdk.models.operations;



public class UpdateHitReviewStatusResponse {
    public String contentType;
    public UpdateHitReviewStatusResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object requestError;
    public UpdateHitReviewStatusResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public Object serviceFault;
    public UpdateHitReviewStatusResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public UpdateHitReviewStatusResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateHITReviewStatusResponse;
    public UpdateHitReviewStatusResponse withUpdateHitReviewStatusResponse(java.util.Map<String, Object> updateHITReviewStatusResponse) {
        this.updateHITReviewStatusResponse = updateHITReviewStatusResponse;
        return this;
    }
}