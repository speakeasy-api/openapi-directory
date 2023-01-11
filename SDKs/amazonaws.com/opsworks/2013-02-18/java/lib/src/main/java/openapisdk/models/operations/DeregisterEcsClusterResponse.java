package openapisdk.models.operations;



public class DeregisterEcsClusterResponse {
    public String contentType;
    public DeregisterEcsClusterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object resourceNotFoundException;
    public DeregisterEcsClusterResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeregisterEcsClusterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object validationException;
    public DeregisterEcsClusterResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}