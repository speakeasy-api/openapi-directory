package openapisdk.models.operations;



public class UpdateScalingPlanResponse {
    public Object concurrentUpdateException;
    public UpdateScalingPlanResponse withConcurrentUpdateException(Object concurrentUpdateException) {
        this.concurrentUpdateException = concurrentUpdateException;
        return this;
    }
    public String contentType;
    public UpdateScalingPlanResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public UpdateScalingPlanResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object objectNotFoundException;
    public UpdateScalingPlanResponse withObjectNotFoundException(Object objectNotFoundException) {
        this.objectNotFoundException = objectNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateScalingPlanResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateScalingPlanResponse;
    public UpdateScalingPlanResponse withUpdateScalingPlanResponse(java.util.Map<String, Object> updateScalingPlanResponse) {
        this.updateScalingPlanResponse = updateScalingPlanResponse;
        return this;
    }
    public Object validationException;
    public UpdateScalingPlanResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}