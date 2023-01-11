package openapisdk.models.operations;



public class ListClustersResponse {
    public Object accessDeniedException;
    public ListClustersResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ListClustersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListClustersResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListClustersResponse listClustersResponse;
    public ListClustersResponse withListClustersResponse(openapisdk.models.shared.ListClustersResponse listClustersResponse) {
        this.listClustersResponse = listClustersResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListClustersResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListClustersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListClustersResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public ListClustersResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}