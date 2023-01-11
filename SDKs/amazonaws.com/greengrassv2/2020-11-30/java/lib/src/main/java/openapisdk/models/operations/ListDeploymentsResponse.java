package openapisdk.models.operations;



public class ListDeploymentsResponse {
    public Object accessDeniedException;
    public ListDeploymentsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListDeploymentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListDeploymentsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListDeploymentsResponse listDeploymentsResponse;
    public ListDeploymentsResponse withListDeploymentsResponse(openapisdk.models.shared.ListDeploymentsResponse listDeploymentsResponse) {
        this.listDeploymentsResponse = listDeploymentsResponse;
        return this;
    }
    public Long statusCode;
    public ListDeploymentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListDeploymentsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListDeploymentsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}