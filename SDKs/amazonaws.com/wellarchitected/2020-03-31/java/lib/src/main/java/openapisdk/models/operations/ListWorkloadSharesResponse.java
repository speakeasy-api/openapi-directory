package openapisdk.models.operations;



public class ListWorkloadSharesResponse {
    public Object accessDeniedException;
    public ListWorkloadSharesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListWorkloadSharesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListWorkloadSharesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListWorkloadSharesOutput listWorkloadSharesOutput;
    public ListWorkloadSharesResponse withListWorkloadSharesOutput(openapisdk.models.shared.ListWorkloadSharesOutput listWorkloadSharesOutput) {
        this.listWorkloadSharesOutput = listWorkloadSharesOutput;
        return this;
    }
    public Object resourceNotFoundException;
    public ListWorkloadSharesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListWorkloadSharesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListWorkloadSharesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListWorkloadSharesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}