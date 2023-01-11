package openapisdk.models.operations;



public class CreateStudioComponentResponse {
    public Object accessDeniedException;
    public CreateStudioComponentResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateStudioComponentResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateStudioComponentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateStudioComponentResponse createStudioComponentResponse;
    public CreateStudioComponentResponse withCreateStudioComponentResponse(openapisdk.models.shared.CreateStudioComponentResponse createStudioComponentResponse) {
        this.createStudioComponentResponse = createStudioComponentResponse;
        return this;
    }
    public Object internalServerErrorException;
    public CreateStudioComponentResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateStudioComponentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateStudioComponentResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateStudioComponentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateStudioComponentResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateStudioComponentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}