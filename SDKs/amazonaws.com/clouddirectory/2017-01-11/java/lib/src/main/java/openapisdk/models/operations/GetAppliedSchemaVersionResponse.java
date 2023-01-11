package openapisdk.models.operations;



public class GetAppliedSchemaVersionResponse {
    public Object accessDeniedException;
    public GetAppliedSchemaVersionResponse withAccessDeniedException(Object accessDeniedException) {
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
    public Object internalServiceException;
    public GetAppliedSchemaVersionResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public GetAppliedSchemaVersionResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object limitExceededException;
    public GetAppliedSchemaVersionResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetAppliedSchemaVersionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public GetAppliedSchemaVersionResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public GetAppliedSchemaVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetAppliedSchemaVersionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}