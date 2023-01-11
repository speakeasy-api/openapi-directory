package openapisdk.models.operations;



public class DeleteCustomRoutingAcceleratorResponse {
    public Object acceleratorNotDisabledException;
    public DeleteCustomRoutingAcceleratorResponse withAcceleratorNotDisabledException(Object acceleratorNotDisabledException) {
        this.acceleratorNotDisabledException = acceleratorNotDisabledException;
        return this;
    }
    public Object acceleratorNotFoundException;
    public DeleteCustomRoutingAcceleratorResponse withAcceleratorNotFoundException(Object acceleratorNotFoundException) {
        this.acceleratorNotFoundException = acceleratorNotFoundException;
        return this;
    }
    public Object associatedListenerFoundException;
    public DeleteCustomRoutingAcceleratorResponse withAssociatedListenerFoundException(Object associatedListenerFoundException) {
        this.associatedListenerFoundException = associatedListenerFoundException;
        return this;
    }
    public String contentType;
    public DeleteCustomRoutingAcceleratorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public DeleteCustomRoutingAcceleratorResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public DeleteCustomRoutingAcceleratorResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Long statusCode;
    public DeleteCustomRoutingAcceleratorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}