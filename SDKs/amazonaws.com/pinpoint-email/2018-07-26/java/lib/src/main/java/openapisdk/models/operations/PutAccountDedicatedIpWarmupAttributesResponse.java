package openapisdk.models.operations;



public class PutAccountDedicatedIpWarmupAttributesResponse {
    public Object badRequestException;
    public PutAccountDedicatedIpWarmupAttributesResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public PutAccountDedicatedIpWarmupAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> putAccountDedicatedIpWarmupAttributesResponse;
    public PutAccountDedicatedIpWarmupAttributesResponse withPutAccountDedicatedIpWarmupAttributesResponse(java.util.Map<String, Object> putAccountDedicatedIpWarmupAttributesResponse) {
        this.putAccountDedicatedIpWarmupAttributesResponse = putAccountDedicatedIpWarmupAttributesResponse;
        return this;
    }
    public Long statusCode;
    public PutAccountDedicatedIpWarmupAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public PutAccountDedicatedIpWarmupAttributesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}