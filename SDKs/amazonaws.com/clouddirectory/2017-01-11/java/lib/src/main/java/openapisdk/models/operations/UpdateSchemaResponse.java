package openapisdk.models.operations;



public class UpdateSchemaResponse {
    public Object accessDeniedException;
    public UpdateSchemaResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateSchemaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public UpdateSchemaResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public UpdateSchemaResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object limitExceededException;
    public UpdateSchemaResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateSchemaResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public UpdateSchemaResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public UpdateSchemaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateSchemaResponse updateSchemaResponse;
    public UpdateSchemaResponse withUpdateSchemaResponse(openapisdk.models.shared.UpdateSchemaResponse updateSchemaResponse) {
        this.updateSchemaResponse = updateSchemaResponse;
        return this;
    }
    public Object validationException;
    public UpdateSchemaResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}