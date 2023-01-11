package openapisdk.models.operations;



public class ListProtectionsResponse {
    public String contentType;
    public ListProtectionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public ListProtectionsResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidPaginationTokenException;
    public ListProtectionsResponse withInvalidPaginationTokenException(Object invalidPaginationTokenException) {
        this.invalidPaginationTokenException = invalidPaginationTokenException;
        return this;
    }
    public openapisdk.models.shared.ListProtectionsResponse listProtectionsResponse;
    public ListProtectionsResponse withListProtectionsResponse(openapisdk.models.shared.ListProtectionsResponse listProtectionsResponse) {
        this.listProtectionsResponse = listProtectionsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListProtectionsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListProtectionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}