package openapisdk.models.operations;



public class DeleteCustomActionTypeResponse {
    public Object concurrentModificationException;
    public DeleteCustomActionTypeResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeleteCustomActionTypeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public DeleteCustomActionTypeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeleteCustomActionTypeResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}