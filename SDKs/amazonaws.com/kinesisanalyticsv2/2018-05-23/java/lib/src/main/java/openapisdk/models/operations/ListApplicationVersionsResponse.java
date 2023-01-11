package openapisdk.models.operations;



public class ListApplicationVersionsResponse {
    public String contentType;
    public ListApplicationVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidArgumentException;
    public ListApplicationVersionsResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public openapisdk.models.shared.ListApplicationVersionsResponse listApplicationVersionsResponse;
    public ListApplicationVersionsResponse withListApplicationVersionsResponse(openapisdk.models.shared.ListApplicationVersionsResponse listApplicationVersionsResponse) {
        this.listApplicationVersionsResponse = listApplicationVersionsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListApplicationVersionsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListApplicationVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedOperationException;
    public ListApplicationVersionsResponse withUnsupportedOperationException(Object unsupportedOperationException) {
        this.unsupportedOperationException = unsupportedOperationException;
        return this;
    }
}