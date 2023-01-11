package openapisdk.models.operations;



public class ListContactsResponse {
    public Object badRequestException;
    public ListContactsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListContactsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListContactsResponse listContactsResponse;
    public ListContactsResponse withListContactsResponse(openapisdk.models.shared.ListContactsResponse listContactsResponse) {
        this.listContactsResponse = listContactsResponse;
        return this;
    }
    public Object notFoundException;
    public ListContactsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public ListContactsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListContactsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}