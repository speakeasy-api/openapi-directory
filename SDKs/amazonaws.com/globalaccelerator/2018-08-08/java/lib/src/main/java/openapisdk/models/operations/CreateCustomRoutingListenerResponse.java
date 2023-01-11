package openapisdk.models.operations;



public class CreateCustomRoutingListenerResponse {
    public Object acceleratorNotFoundException;
    public CreateCustomRoutingListenerResponse withAcceleratorNotFoundException(Object acceleratorNotFoundException) {
        this.acceleratorNotFoundException = acceleratorNotFoundException;
        return this;
    }
    public String contentType;
    public CreateCustomRoutingListenerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateCustomRoutingListenerResponse createCustomRoutingListenerResponse;
    public CreateCustomRoutingListenerResponse withCreateCustomRoutingListenerResponse(openapisdk.models.shared.CreateCustomRoutingListenerResponse createCustomRoutingListenerResponse) {
        this.createCustomRoutingListenerResponse = createCustomRoutingListenerResponse;
        return this;
    }
    public Object internalServiceErrorException;
    public CreateCustomRoutingListenerResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public CreateCustomRoutingListenerResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidPortRangeException;
    public CreateCustomRoutingListenerResponse withInvalidPortRangeException(Object invalidPortRangeException) {
        this.invalidPortRangeException = invalidPortRangeException;
        return this;
    }
    public Object limitExceededException;
    public CreateCustomRoutingListenerResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateCustomRoutingListenerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}