package openapisdk.models.operations;



public class CreateDatabaseResponse {
    public Object accessDeniedException;
    public CreateDatabaseResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateDatabaseResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateDatabaseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDatabaseResponse createDatabaseResponse;
    public CreateDatabaseResponse withCreateDatabaseResponse(openapisdk.models.shared.CreateDatabaseResponse createDatabaseResponse) {
        this.createDatabaseResponse = createDatabaseResponse;
        return this;
    }
    public Object internalServerException;
    public CreateDatabaseResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidEndpointException;
    public CreateDatabaseResponse withInvalidEndpointException(Object invalidEndpointException) {
        this.invalidEndpointException = invalidEndpointException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateDatabaseResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateDatabaseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateDatabaseResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateDatabaseResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}