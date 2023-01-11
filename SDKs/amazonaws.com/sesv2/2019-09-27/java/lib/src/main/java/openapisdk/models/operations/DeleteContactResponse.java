package openapisdk.models.operations;



public class DeleteContactResponse {
    public Object badRequestException;
    public DeleteContactResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteContactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteContactResponse;
    public DeleteContactResponse withDeleteContactResponse(java.util.Map<String, Object> deleteContactResponse) {
        this.deleteContactResponse = deleteContactResponse;
        return this;
    }
    public Object notFoundException;
    public DeleteContactResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteContactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteContactResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}