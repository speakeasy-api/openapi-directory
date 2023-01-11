package openapisdk.models.operations;



public class DeleteTableResponse {
    public Object accessDeniedException;
    public DeleteTableResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteTableResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public DeleteTableResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidEndpointException;
    public DeleteTableResponse withInvalidEndpointException(Object invalidEndpointException) {
        this.invalidEndpointException = invalidEndpointException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteTableResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteTableResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DeleteTableResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DeleteTableResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}