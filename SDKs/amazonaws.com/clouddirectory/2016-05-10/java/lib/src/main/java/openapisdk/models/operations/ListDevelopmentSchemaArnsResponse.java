package openapisdk.models.operations;



public class ListDevelopmentSchemaArnsResponse {
    public openapisdk.models.shared.AccessDeniedException accessDeniedException;
    public ListDevelopmentSchemaArnsResponse withAccessDeniedException(openapisdk.models.shared.AccessDeniedException accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListDevelopmentSchemaArnsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InternalServiceException internalServiceException;
    public ListDevelopmentSchemaArnsResponse withInternalServiceException(openapisdk.models.shared.InternalServiceException internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.InvalidArnException invalidArnException;
    public ListDevelopmentSchemaArnsResponse withInvalidArnException(openapisdk.models.shared.InvalidArnException invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public openapisdk.models.shared.InvalidNextTokenException invalidNextTokenException;
    public ListDevelopmentSchemaArnsResponse withInvalidNextTokenException(openapisdk.models.shared.InvalidNextTokenException invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.LimitExceededException limitExceededException;
    public ListDevelopmentSchemaArnsResponse withLimitExceededException(openapisdk.models.shared.LimitExceededException limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ListDevelopmentSchemaArnsResponse listDevelopmentSchemaArnsResponse;
    public ListDevelopmentSchemaArnsResponse withListDevelopmentSchemaArnsResponse(openapisdk.models.shared.ListDevelopmentSchemaArnsResponse listDevelopmentSchemaArnsResponse) {
        this.listDevelopmentSchemaArnsResponse = listDevelopmentSchemaArnsResponse;
        return this;
    }
    public openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException;
    public ListDevelopmentSchemaArnsResponse withResourceNotFoundException(openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.RetryableConflictException retryableConflictException;
    public ListDevelopmentSchemaArnsResponse withRetryableConflictException(openapisdk.models.shared.RetryableConflictException retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public ListDevelopmentSchemaArnsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationException validationException;
    public ListDevelopmentSchemaArnsResponse withValidationException(openapisdk.models.shared.ValidationException validationException) {
        this.validationException = validationException;
        return this;
    }
}