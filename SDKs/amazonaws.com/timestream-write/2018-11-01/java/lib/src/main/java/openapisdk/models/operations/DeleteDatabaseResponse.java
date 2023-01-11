package openapisdk.models.operations;



public class DeleteDatabaseResponse {
    public Object accessDeniedException;
    public DeleteDatabaseResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteDatabaseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public DeleteDatabaseResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidEndpointException;
    public DeleteDatabaseResponse withInvalidEndpointException(Object invalidEndpointException) {
        this.invalidEndpointException = invalidEndpointException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteDatabaseResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteDatabaseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteDatabaseResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteDatabaseResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}