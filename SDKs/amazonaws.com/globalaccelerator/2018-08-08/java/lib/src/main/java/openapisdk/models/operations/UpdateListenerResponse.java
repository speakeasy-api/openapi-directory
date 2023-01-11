package openapisdk.models.operations;



public class UpdateListenerResponse {
    public String contentType;
    public UpdateListenerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public UpdateListenerResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidArgumentException;
    public UpdateListenerResponse withInvalidArgumentException(Object invalidArgumentException) {
        this.invalidArgumentException = invalidArgumentException;
        return this;
    }
    public Object invalidPortRangeException;
    public UpdateListenerResponse withInvalidPortRangeException(Object invalidPortRangeException) {
        this.invalidPortRangeException = invalidPortRangeException;
        return this;
    }
    public Object limitExceededException;
    public UpdateListenerResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object listenerNotFoundException;
    public UpdateListenerResponse withListenerNotFoundException(Object listenerNotFoundException) {
        this.listenerNotFoundException = listenerNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateListenerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateListenerResponse updateListenerResponse;
    public UpdateListenerResponse withUpdateListenerResponse(openapisdk.models.shared.UpdateListenerResponse updateListenerResponse) {
        this.updateListenerResponse = updateListenerResponse;
        return this;
    }
}