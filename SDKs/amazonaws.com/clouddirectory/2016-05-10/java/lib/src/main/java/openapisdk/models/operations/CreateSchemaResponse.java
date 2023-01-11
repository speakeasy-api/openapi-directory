package openapisdk.models.operations;



public class CreateSchemaResponse {
    public openapisdk.models.shared.AccessDeniedException accessDeniedException;
    public CreateSchemaResponse withAccessDeniedException(openapisdk.models.shared.AccessDeniedException accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateSchemaResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateSchemaResponse createSchemaResponse;
    public CreateSchemaResponse withCreateSchemaResponse(openapisdk.models.shared.CreateSchemaResponse createSchemaResponse) {
        this.createSchemaResponse = createSchemaResponse;
        return this;
    }
    public openapisdk.models.shared.InternalServiceException internalServiceException;
    public CreateSchemaResponse withInternalServiceException(openapisdk.models.shared.InternalServiceException internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public openapisdk.models.shared.InvalidArnException invalidArnException;
    public CreateSchemaResponse withInvalidArnException(openapisdk.models.shared.InvalidArnException invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public openapisdk.models.shared.LimitExceededException limitExceededException;
    public CreateSchemaResponse withLimitExceededException(openapisdk.models.shared.LimitExceededException limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.RetryableConflictException retryableConflictException;
    public CreateSchemaResponse withRetryableConflictException(openapisdk.models.shared.RetryableConflictException retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public openapisdk.models.shared.SchemaAlreadyExistsException schemaAlreadyExistsException;
    public CreateSchemaResponse withSchemaAlreadyExistsException(openapisdk.models.shared.SchemaAlreadyExistsException schemaAlreadyExistsException) {
        this.schemaAlreadyExistsException = schemaAlreadyExistsException;
        return this;
    }
    public Long statusCode;
    public CreateSchemaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ValidationException validationException;
    public CreateSchemaResponse withValidationException(openapisdk.models.shared.ValidationException validationException) {
        this.validationException = validationException;
        return this;
    }
}