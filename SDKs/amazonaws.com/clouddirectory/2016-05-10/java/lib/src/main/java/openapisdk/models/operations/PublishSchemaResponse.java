package openapisdk.models.operations;



public class PublishSchemaResponse {
    public openapisdk.models.shared.AccessDeniedException accessDeniedException;
    public PublishSchemaResponse withAccessDeniedException(openapisdk.models.shared.AccessDeniedException accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public PublishSchemaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.InternalServiceException internalServiceException;
    public PublishSchemaResponse withInternalServiceException(openapisdk.models.shared.InternalServiceException internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.InvalidArnException invalidArnException;
    public PublishSchemaResponse withInvalidArnException(openapisdk.models.shared.InvalidArnException invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public openapisdk.models.shared.LimitExceededException limitExceededException;
    public PublishSchemaResponse withLimitExceededException(openapisdk.models.shared.LimitExceededException limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.PublishSchemaResponse publishSchemaResponse;
    public PublishSchemaResponse withPublishSchemaResponse(openapisdk.models.shared.PublishSchemaResponse publishSchemaResponse) {
        this.publishSchemaResponse = publishSchemaResponse;
        return this;
    }
    public openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException;
    public PublishSchemaResponse withResourceNotFoundException(openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.RetryableConflictException retryableConflictException;
    public PublishSchemaResponse withRetryableConflictException(openapisdk.models.shared.RetryableConflictException retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public openapisdk.models.shared.SchemaAlreadyPublishedException schemaAlreadyPublishedException;
    public PublishSchemaResponse withSchemaAlreadyPublishedException(openapisdk.models.shared.SchemaAlreadyPublishedException schemaAlreadyPublishedException) {
        this.schemaAlreadyPublishedException = schemaAlreadyPublishedException;
        return this;
    }
    public Long statusCode;
    public PublishSchemaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationException validationException;
    public PublishSchemaResponse withValidationException(openapisdk.models.shared.ValidationException validationException) {
        this.validationException = validationException;
        return this;
    }
}