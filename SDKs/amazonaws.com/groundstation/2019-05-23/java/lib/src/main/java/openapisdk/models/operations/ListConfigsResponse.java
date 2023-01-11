package openapisdk.models.operations;



public class ListConfigsResponse {
    public String contentType;
    public ListConfigsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dependencyException;
    public ListConfigsResponse withDependencyException(Object dependencyException) {
        this.dependencyException = dependencyException;
        return this;
    }
    public Object invalidParameterException;
    public ListConfigsResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public openapisdk.models.shared.ListConfigsResponse listConfigsResponse;
    public ListConfigsResponse withListConfigsResponse(openapisdk.models.shared.ListConfigsResponse listConfigsResponse) {
        this.listConfigsResponse = listConfigsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListConfigsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListConfigsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}