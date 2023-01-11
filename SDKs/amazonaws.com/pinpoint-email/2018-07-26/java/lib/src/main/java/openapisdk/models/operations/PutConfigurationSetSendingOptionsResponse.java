package openapisdk.models.operations;



public class PutConfigurationSetSendingOptionsResponse {
    public Object badRequestException;
    public PutConfigurationSetSendingOptionsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public PutConfigurationSetSendingOptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object notFoundException;
    public PutConfigurationSetSendingOptionsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public java.util.Map<String, Object> putConfigurationSetSendingOptionsResponse;
    public PutConfigurationSetSendingOptionsResponse withPutConfigurationSetSendingOptionsResponse(java.util.Map<String, Object> putConfigurationSetSendingOptionsResponse) {
        this.putConfigurationSetSendingOptionsResponse = putConfigurationSetSendingOptionsResponse;
        return this;
    }
    public Long statusCode;
    public PutConfigurationSetSendingOptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public PutConfigurationSetSendingOptionsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}