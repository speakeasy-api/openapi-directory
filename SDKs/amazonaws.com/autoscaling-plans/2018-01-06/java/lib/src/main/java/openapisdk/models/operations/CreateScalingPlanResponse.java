package openapisdk.models.operations;



public class CreateScalingPlanResponse {
    public Object concurrentUpdateException;
    public CreateScalingPlanResponse withConcurrentUpdateException(Object concurrentUpdateException) {
        this.concurrentUpdateException = concurrentUpdateException;
        return this;
    }
    public String contentType;
    public CreateScalingPlanResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateScalingPlanResponse createScalingPlanResponse;
    public CreateScalingPlanResponse withCreateScalingPlanResponse(openapisdk.models.shared.CreateScalingPlanResponse createScalingPlanResponse) {
        this.createScalingPlanResponse = createScalingPlanResponse;
        return this;
    }
    public Object internalServiceException;
    public CreateScalingPlanResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object limitExceededException;
    public CreateScalingPlanResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateScalingPlanResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateScalingPlanResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}