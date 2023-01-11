package openapisdk.models.operations;



public class ListWorkloadsResponse {
    public Object accessDeniedException;
    public ListWorkloadsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListWorkloadsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListWorkloadsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListWorkloadsOutput listWorkloadsOutput;
    public ListWorkloadsResponse withListWorkloadsOutput(openapisdk.models.shared.ListWorkloadsOutput listWorkloadsOutput) {
        this.listWorkloadsOutput = listWorkloadsOutput;
        return this;
    }
    public Long statusCode;
    public ListWorkloadsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListWorkloadsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListWorkloadsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}