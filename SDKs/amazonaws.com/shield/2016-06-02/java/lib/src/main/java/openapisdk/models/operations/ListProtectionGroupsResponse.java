package openapisdk.models.operations;



public class ListProtectionGroupsResponse {
    public String contentType;
    public ListProtectionGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public ListProtectionGroupsResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidPaginationTokenException;
    public ListProtectionGroupsResponse withInvalidPaginationTokenException(Object invalidPaginationTokenException) {
        this.invalidPaginationTokenException = invalidPaginationTokenException;
        return this;
    }
    public openapisdk.models.shared.ListProtectionGroupsResponse listProtectionGroupsResponse;
    public ListProtectionGroupsResponse withListProtectionGroupsResponse(openapisdk.models.shared.ListProtectionGroupsResponse listProtectionGroupsResponse) {
        this.listProtectionGroupsResponse = listProtectionGroupsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListProtectionGroupsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ListProtectionGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}