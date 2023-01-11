package openapisdk.models.operations;



public class CreateSchemaResponse {
    public Object accessDeniedException;
    public CreateSchemaResponse withAccessDeniedException(Object accessDeniedException) {
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
    public Object internalServiceException;
    public CreateSchemaResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidArnException;
    public CreateSchemaResponse withInvalidArnException(Object invalidArnException) {
        this.invalidArnException = invalidArnException;
        return this;
    }
    public Object limitExceededException;
    public CreateSchemaResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object retryableConflictException;
    public CreateSchemaResponse withRetryableConflictException(Object retryableConflictException) {
        this.retryableConflictException = retryableConflictException;
        return this;
    }
    public Object schemaAlreadyExistsException;
    public CreateSchemaResponse withSchemaAlreadyExistsException(Object schemaAlreadyExistsException) {
        this.schemaAlreadyExistsException = schemaAlreadyExistsException;
        return this;
    }
    public Long statusCode;
    public CreateSchemaResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public CreateSchemaResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}