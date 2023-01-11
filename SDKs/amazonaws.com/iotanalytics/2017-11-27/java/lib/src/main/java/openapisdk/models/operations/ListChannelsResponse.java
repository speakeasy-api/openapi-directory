package openapisdk.models.operations;



public class ListChannelsResponse {
    public String contentType;
    public ListChannelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListChannelsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListChannelsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListChannelsResponse listChannelsResponse;
    public ListChannelsResponse withListChannelsResponse(openapisdk.models.shared.ListChannelsResponse listChannelsResponse) {
        this.listChannelsResponse = listChannelsResponse;
        return this;
    }
    public Object serviceUnavailableException;
    public ListChannelsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListChannelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListChannelsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}