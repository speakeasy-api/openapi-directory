package openapisdk.models.operations;



public class PutConfigurationSetDeliveryOptionsResponse {
    public Object badRequestException;
    public PutConfigurationSetDeliveryOptionsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public PutConfigurationSetDeliveryOptionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object notFoundException;
    public PutConfigurationSetDeliveryOptionsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public java.util.Map<String, Object> putConfigurationSetDeliveryOptionsResponse;
    public PutConfigurationSetDeliveryOptionsResponse withPutConfigurationSetDeliveryOptionsResponse(java.util.Map<String, Object> putConfigurationSetDeliveryOptionsResponse) {
        this.putConfigurationSetDeliveryOptionsResponse = putConfigurationSetDeliveryOptionsResponse;
        return this;
    }
    public Long statusCode;
    public PutConfigurationSetDeliveryOptionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public PutConfigurationSetDeliveryOptionsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}