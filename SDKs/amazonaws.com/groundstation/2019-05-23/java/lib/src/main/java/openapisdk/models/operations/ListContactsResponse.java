package openapisdk.models.operations;



public class ListContactsResponse {
    public String contentType;
    public ListContactsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyException;
    public ListContactsResponse withDependencyException(Object dependencyException) {
        this.dependencyException = dependencyException;
        return this;
    }
    public Object invalidParameterException;
    public ListContactsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListContactsResponse listContactsResponse;
    public ListContactsResponse withListContactsResponse(openapisdk.models.shared.ListContactsResponse listContactsResponse) {
        this.listContactsResponse = listContactsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListContactsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListContactsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}