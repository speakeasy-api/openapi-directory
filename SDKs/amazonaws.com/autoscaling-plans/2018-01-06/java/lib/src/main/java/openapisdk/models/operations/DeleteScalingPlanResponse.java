package openapisdk.models.operations;



public class DeleteScalingPlanResponse {
    public Object concurrentUpdateException;
    public DeleteScalingPlanResponse withConcurrentUpdateException(Object concurrentUpdateException) {
        this.concurrentUpdateException = concurrentUpdateException;
        return this;
    }
    public String contentType;
    public DeleteScalingPlanResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteScalingPlanResponse;
    public DeleteScalingPlanResponse withDeleteScalingPlanResponse(java.util.Map<String, Object> deleteScalingPlanResponse) {
        this.deleteScalingPlanResponse = deleteScalingPlanResponse;
        return this;
    }
    public Object internalServiceException;
    public DeleteScalingPlanResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object objectNotFoundException;
    public DeleteScalingPlanResponse withObjectNotFoundException(Object objectNotFoundException) {
        this.objectNotFoundException = objectNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteScalingPlanResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteScalingPlanResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}