package openapisdk.models.operations;



public class DeleteCustomRoutingListenerResponse {
    public Object associatedEndpointGroupFoundException;
    public DeleteCustomRoutingListenerResponse withAssociatedEndpointGroupFoundException(Object associatedEndpointGroupFoundException) {
        this.associatedEndpointGroupFoundException = associatedEndpointGroupFoundException;
        return this;
    }
    public String contentType;
    public DeleteCustomRoutingListenerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public DeleteCustomRoutingListenerResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public DeleteCustomRoutingListenerResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object listenerNotFoundException;
    public DeleteCustomRoutingListenerResponse withListenerNotFoundException(Object listenerNotFoundException) {
        this.listenerNotFoundException = listenerNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteCustomRoutingListenerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}