package openapisdk.models.operations;



public class DeauthorizeConnectionResponse {
    public Object concurrentModificationException;
    public DeauthorizeConnectionResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public String contentType;
    public DeauthorizeConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeauthorizeConnectionResponse deauthorizeConnectionResponse;
    public DeauthorizeConnectionResponse withDeauthorizeConnectionResponse(openapisdk.models.shared.DeauthorizeConnectionResponse deauthorizeConnectionResponse) {
        this.deauthorizeConnectionResponse = deauthorizeConnectionResponse;
        return this;
    }
    public Object internalException;
    public DeauthorizeConnectionResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeauthorizeConnectionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeauthorizeConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}