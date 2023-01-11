package openapisdk.models.operations;



public class DeleteContactListResponse {
    public Object badRequestException;
    public DeleteContactListResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object concurrentModificationException;
    public DeleteContactListResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeleteContactListResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteContactListResponse;
    public DeleteContactListResponse withDeleteContactListResponse(java.util.Map<String, Object> deleteContactListResponse) {
        this.deleteContactListResponse = deleteContactListResponse;
        return this;
    }
    public Object notFoundException;
    public DeleteContactListResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteContactListResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteContactListResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}