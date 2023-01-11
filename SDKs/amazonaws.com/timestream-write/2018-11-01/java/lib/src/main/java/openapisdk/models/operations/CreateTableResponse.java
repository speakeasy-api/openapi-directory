package openapisdk.models.operations;



public class CreateTableResponse {
    public Object accessDeniedException;
    public CreateTableResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public CreateTableResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateTableResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateTableResponse createTableResponse;
    public CreateTableResponse withCreateTableResponse(openapisdk.models.shared.CreateTableResponse createTableResponse) {
        this.createTableResponse = createTableResponse;
        return this;
    }
    public Object internalServerException;
    public CreateTableResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidEndpointException;
    public CreateTableResponse withInvalidEndpointException(Object invalidEndpointException) {
        this.invalidEndpointException = invalidEndpointException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateTableResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateTableResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public CreateTableResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateTableResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public CreateTableResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}