package openapisdk.models.operations;



public class CreateEnvironmentResponse {
    public Object accessDeniedException;
    public CreateEnvironmentResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateEnvironmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateEnvironmentResponse createEnvironmentResponse;
    public CreateEnvironmentResponse withCreateEnvironmentResponse(openapisdk.models.shared.CreateEnvironmentResponse createEnvironmentResponse) {
        this.createEnvironmentResponse = createEnvironmentResponse;
        return this;
    }
    public Object internalServerException;
    public CreateEnvironmentResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object limitExceededException;
    public CreateEnvironmentResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateEnvironmentResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateEnvironmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateEnvironmentResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateEnvironmentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}