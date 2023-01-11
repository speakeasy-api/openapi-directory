package openapisdk.models.operations;



public class WriteRecordsResponse {
    public Object accessDeniedException;
    public WriteRecordsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public WriteRecordsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public WriteRecordsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidEndpointException;
    public WriteRecordsResponse withInvalidEndpointException(Object invalidEndpointException) {
        this.invalidEndpointException = invalidEndpointException;
        return this;
    }
    public Object rejectedRecordsException;
    public WriteRecordsResponse withRejectedRecordsException(Object rejectedRecordsException) {
        this.rejectedRecordsException = rejectedRecordsException;
        return this;
    }
    public Object resourceNotFoundException;
    public WriteRecordsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public WriteRecordsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public WriteRecordsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public WriteRecordsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}