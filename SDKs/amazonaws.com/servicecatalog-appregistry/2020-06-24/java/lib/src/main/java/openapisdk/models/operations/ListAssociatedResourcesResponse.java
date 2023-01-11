package openapisdk.models.operations;



public class ListAssociatedResourcesResponse {
    public String contentType;
    public ListAssociatedResourcesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ListAssociatedResourcesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public openapisdk.models.shared.ListAssociatedResourcesResponse listAssociatedResourcesResponse;
    public ListAssociatedResourcesResponse withListAssociatedResourcesResponse(openapisdk.models.shared.ListAssociatedResourcesResponse listAssociatedResourcesResponse) {
        this.listAssociatedResourcesResponse = listAssociatedResourcesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListAssociatedResourcesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListAssociatedResourcesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public ListAssociatedResourcesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}