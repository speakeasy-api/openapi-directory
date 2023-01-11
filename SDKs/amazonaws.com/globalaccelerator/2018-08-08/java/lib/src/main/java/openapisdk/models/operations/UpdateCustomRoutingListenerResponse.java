package openapisdk.models.operations;



public class UpdateCustomRoutingListenerResponse {
    public String contentType;
    public UpdateCustomRoutingListenerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public UpdateCustomRoutingListenerResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public UpdateCustomRoutingListenerResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidPortRangeException;
    public UpdateCustomRoutingListenerResponse withInvalidPortRangeException(Object invalidPortRangeException) {
        this.invalidPortRangeException = invalidPortRangeException;
        return this;
    }
    public Object limitExceededException;
    public UpdateCustomRoutingListenerResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object listenerNotFoundException;
    public UpdateCustomRoutingListenerResponse withListenerNotFoundException(Object listenerNotFoundException) {
        this.listenerNotFoundException = listenerNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateCustomRoutingListenerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateCustomRoutingListenerResponse updateCustomRoutingListenerResponse;
    public UpdateCustomRoutingListenerResponse withUpdateCustomRoutingListenerResponse(openapisdk.models.shared.UpdateCustomRoutingListenerResponse updateCustomRoutingListenerResponse) {
        this.updateCustomRoutingListenerResponse = updateCustomRoutingListenerResponse;
        return this;
    }
}