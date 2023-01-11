package openapisdk.models.operations;



public class GetContactResponse {
    public Object badRequestException;
    public GetContactResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetContactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetContactResponse getContactResponse;
    public GetContactResponse withGetContactResponse(openapisdk.models.shared.GetContactResponse getContactResponse) {
        this.getContactResponse = getContactResponse;
        return this;
    }
    public Object notFoundException;
    public GetContactResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetContactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetContactResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}