package openapisdk.models.operations;



public class PutDedicatedIpWarmupAttributesResponse {
    public Object badRequestException;
    public PutDedicatedIpWarmupAttributesResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public PutDedicatedIpWarmupAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object notFoundException;
    public PutDedicatedIpWarmupAttributesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public java.util.Map<String, Object> putDedicatedIpWarmupAttributesResponse;
    public PutDedicatedIpWarmupAttributesResponse withPutDedicatedIpWarmupAttributesResponse(java.util.Map<String, Object> putDedicatedIpWarmupAttributesResponse) {
        this.putDedicatedIpWarmupAttributesResponse = putDedicatedIpWarmupAttributesResponse;
        return this;
    }
    public Long statusCode;
    public PutDedicatedIpWarmupAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public PutDedicatedIpWarmupAttributesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}