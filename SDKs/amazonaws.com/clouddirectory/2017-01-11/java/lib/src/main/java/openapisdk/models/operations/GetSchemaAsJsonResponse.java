package openapisdk.models.operations;



public class GetSchemaAsJsonResponse {
    public Object accessDeniedException;
    public GetSchemaAsJsonResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetSchemaAsJsonResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetSchemaAsJsonResponse getSchemaAsJsonResponse;
    public GetSchemaAsJsonResponse withGetSchemaAsJsonResponse(openapisdk.models.shared.GetSchemaAsJsonResponse getSchemaAsJsonResponse) {
        this.getSchemaAsJsonResponse = getSchemaAsJsonResponse;
        return this;
    }
    public Object internalServiceException;
    public GetSchemaAsJsonResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public GetSchemaAsJsonResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object limitExceededException;
    public GetSchemaAsJsonResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetSchemaAsJsonResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public GetSchemaAsJsonResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Long statusCode;
    public GetSchemaAsJsonResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public GetSchemaAsJsonResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}