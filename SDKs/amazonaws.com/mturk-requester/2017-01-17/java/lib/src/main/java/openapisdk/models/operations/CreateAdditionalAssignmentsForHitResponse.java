package openapisdk.models.operations;



public class CreateAdditionalAssignmentsForHitResponse {
    public String contentType;
    public CreateAdditionalAssignmentsForHitResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> createAdditionalAssignmentsForHITResponse;
    public CreateAdditionalAssignmentsForHitResponse withCreateAdditionalAssignmentsForHitResponse(java.util.Map<String, Object> createAdditionalAssignmentsForHITResponse) {
        this.createAdditionalAssignmentsForHITResponse = createAdditionalAssignmentsForHITResponse;
        return this;
    }
    public Object requestError;
    public CreateAdditionalAssignmentsForHitResponse withRequestError(Object requestError) {
        this.requestError = requestError;
        return this;
    }
    public Object serviceFault;
    public CreateAdditionalAssignmentsForHitResponse withServiceFault(Object serviceFault) {
        this.serviceFault = serviceFault;
        return this;
    }
    public Long statusCode;
    public CreateAdditionalAssignmentsForHitResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}