package openapisdk.models.operations;



public class ListEnvironmentsResponse {
    public Object accessDeniedException;
    public ListEnvironmentsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListEnvironmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListEnvironmentsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListEnvironmentsOutput listEnvironmentsOutput;
    public ListEnvironmentsResponse withListEnvironmentsOutput(openapisdk.models.shared.ListEnvironmentsOutput listEnvironmentsOutput) {
        this.listEnvironmentsOutput = listEnvironmentsOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public ListEnvironmentsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListEnvironmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListEnvironmentsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListEnvironmentsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}