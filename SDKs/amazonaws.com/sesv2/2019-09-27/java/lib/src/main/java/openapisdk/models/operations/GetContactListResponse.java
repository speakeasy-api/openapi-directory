package openapisdk.models.operations;



public class GetContactListResponse {
    public Object badRequestException;
    public GetContactListResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetContactListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetContactListResponse getContactListResponse;
    public GetContactListResponse withGetContactListResponse(openapisdk.models.shared.GetContactListResponse getContactListResponse) {
        this.getContactListResponse = getContactListResponse;
        return this;
    }
    public Object notFoundException;
    public GetContactListResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetContactListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetContactListResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}