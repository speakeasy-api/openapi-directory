package openapisdk.models.operations;



public class ListAssociatedAssetsResponse {
    public String contentType;
    public ListAssociatedAssetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListAssociatedAssetsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListAssociatedAssetsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListAssociatedAssetsResponse listAssociatedAssetsResponse;
    public ListAssociatedAssetsResponse withListAssociatedAssetsResponse(openapisdk.models.shared.ListAssociatedAssetsResponse listAssociatedAssetsResponse) {
        this.listAssociatedAssetsResponse = listAssociatedAssetsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListAssociatedAssetsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListAssociatedAssetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListAssociatedAssetsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}