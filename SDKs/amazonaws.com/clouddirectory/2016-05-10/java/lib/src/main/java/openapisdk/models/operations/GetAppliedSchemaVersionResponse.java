package openapisdk.models.operations;



public class GetAppliedSchemaVersionResponse {
    public openapisdk.models.shared.AccessDeniedException accessDeniedException;
    public GetAppliedSchemaVersionResponse withAccessDeniedException(openapisdk.models.shared.AccessDeniedException accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetAppliedSchemaVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetAppliedSchemaVersionResponse getAppliedSchemaVersionResponse;
    public GetAppliedSchemaVersionResponse withGetAppliedSchemaVersionResponse(openapisdk.models.shared.GetAppliedSchemaVersionResponse getAppliedSchemaVersionResponse) {
        this.getAppliedSchemaVersionResponse = getAppliedSchemaVersionResponse;
        return this;
    }
    public openapisdk.models.shared.InternalServiceException internalServiceException;
    public GetAppliedSchemaVersionResponse withInternalServiceException(openapisdk.models.shared.InternalServiceException internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.InvalidArnException invalidArnException;
    public GetAppliedSchemaVersionResponse withInvalidArnException(openapisdk.models.shared.InvalidArnException invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public openapisdk.models.shared.LimitExceededException limitExceededException;
    public GetAppliedSchemaVersionResponse withLimitExceededException(openapisdk.models.shared.LimitExceededException limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException;
    public GetAppliedSchemaVersionResponse withResourceNotFoundException(openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.RetryableConflictException retryableConflictException;
    public GetAppliedSchemaVersionResponse withRetryableConflictException(openapisdk.models.shared.RetryableConflictException retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public GetAppliedSchemaVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationException validationException;
    public GetAppliedSchemaVersionResponse withValidationException(openapisdk.models.shared.ValidationException validationException) {
        this.validationException = validationException;
        return this;
    }
}