package openapisdk.models.operations;



public class PublishSchemaResponse {
    public Object accessDeniedException;
    public PublishSchemaResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public PublishSchemaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public PublishSchemaResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public PublishSchemaResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object limitExceededException;
    public PublishSchemaResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.PublishSchemaResponse publishSchemaResponse;
    public PublishSchemaResponse withPublishSchemaResponse(openapisdk.models.shared.PublishSchemaResponse publishSchemaResponse) {
        this.publishSchemaResponse = publishSchemaResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public PublishSchemaResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object retryableConflictException;
    public PublishSchemaResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Object schemaAlreadyPublishedException;
    public PublishSchemaResponse withSchemaAlreadyPublishedException(Object schemaAlreadyPublishedException) {
        this.schemaAlreadyPublishedException = schemaAlreadyPublishedException;
        return this;
    }
    public Long statusCode;
    public PublishSchemaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public PublishSchemaResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}