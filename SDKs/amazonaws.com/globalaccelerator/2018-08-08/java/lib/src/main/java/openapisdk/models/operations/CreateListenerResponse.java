package openapisdk.models.operations;



public class CreateListenerResponse {
    public Object acceleratorNotFoundException;
    public CreateListenerResponse withAcceleratorNotFoundException(Object acceleratorNotFoundException) {
        this.acceleratorNotFoundException = acceleratorNotFoundException;
        return this;
    }
    public String contentType;
    public CreateListenerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateListenerResponse createListenerResponse;
    public CreateListenerResponse withCreateListenerResponse(openapisdk.models.shared.CreateListenerResponse createListenerResponse) {
        this.createListenerResponse = createListenerResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public CreateListenerResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public CreateListenerResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidPortRangeException;
    public CreateListenerResponse withInvalidPortRangeException(Object invalidPortRangeException) {
        this.invalidPortRangeException = invalidPortRangeException;
        return this;
    }
    public Object limitExceededException;
    public CreateListenerResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateListenerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}