package openapisdk.models.operations;



public class ListContactListsResponse {
    public Object badRequestException;
    public ListContactListsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListContactListsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListContactListsResponse listContactListsResponse;
    public ListContactListsResponse withListContactListsResponse(openapisdk.models.shared.ListContactListsResponse listContactListsResponse) {
        this.listContactListsResponse = listContactListsResponse;
        return this;
    }
    public Long statusCode;
    public ListContactListsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListContactListsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}