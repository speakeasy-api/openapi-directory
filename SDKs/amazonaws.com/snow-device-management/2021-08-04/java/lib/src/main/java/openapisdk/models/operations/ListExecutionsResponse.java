package openapisdk.models.operations;



public class ListExecutionsResponse {
    public Object accessDeniedException;
    public ListExecutionsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListExecutionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListExecutionsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListExecutionsOutput listExecutionsOutput;
    public ListExecutionsResponse withListExecutionsOutput(openapisdk.models.shared.ListExecutionsOutput listExecutionsOutput) {
        this.listExecutionsOutput = listExecutionsOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public ListExecutionsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListExecutionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListExecutionsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListExecutionsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}