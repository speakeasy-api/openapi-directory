package openapisdk.models.operations;



public class DeleteListenerResponse {
    public Object associatedEndpointGroupFoundException;
    public DeleteListenerResponse withAssociatedEndpointGroupFoundException(Object associatedEndpointGroupFoundException) {
        this.associatedEndpointGroupFoundException = associatedEndpointGroupFoundException;
        return this;
    }
    public String contentType;
    public DeleteListenerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public DeleteListenerResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public DeleteListenerResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object listenerNotFoundException;
    public DeleteListenerResponse withListenerNotFoundException(Object listenerNotFoundException) {
        this.listenerNotFoundException = listenerNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteListenerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}