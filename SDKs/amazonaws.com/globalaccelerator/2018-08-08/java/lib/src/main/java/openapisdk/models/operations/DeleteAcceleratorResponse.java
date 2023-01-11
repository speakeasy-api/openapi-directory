package openapisdk.models.operations;



public class DeleteAcceleratorResponse {
    public Object acceleratorNotDisabledException;
    public DeleteAcceleratorResponse withAcceleratorNotDisabledException(Object acceleratorNotDisabledException) {
        this.acceleratorNotDisabledException = acceleratorNotDisabledException;
        return this;
    }
    public Object acceleratorNotFoundException;
    public DeleteAcceleratorResponse withAcceleratorNotFoundException(Object acceleratorNotFoundException) {
        this.acceleratorNotFoundException = acceleratorNotFoundException;
        return this;
    }
    public Object associatedListenerFoundException;
    public DeleteAcceleratorResponse withAssociatedListenerFoundException(Object associatedListenerFoundException) {
        this.associatedListenerFoundException = associatedListenerFoundException;
        return this;
    }
    public String contentType;
    public DeleteAcceleratorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public DeleteAcceleratorResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public DeleteAcceleratorResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Long statusCode;
    public DeleteAcceleratorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}