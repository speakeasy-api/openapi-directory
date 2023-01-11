package openapisdk.models.operations;



public class UpdateContactResponse {
    public Object badRequestException;
    public UpdateContactResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object concurrentModificationException;
    public UpdateContactResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public UpdateContactResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object notFoundException;
    public UpdateContactResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateContactResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateContactResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public java.util.Map<String, Object> updateContactResponse;
    public UpdateContactResponse withUpdateContactResponse(java.util.Map<String, Object> updateContactResponse) {
        this.updateContactResponse = updateContactResponse;
        return this;
    }
}