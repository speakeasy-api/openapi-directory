package openapisdk.models.operations;



public class PutDedicatedIpInPoolResponse {
    public Object badRequestException;
    public PutDedicatedIpInPoolResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public PutDedicatedIpInPoolResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object notFoundException;
    public PutDedicatedIpInPoolResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public java.util.Map<String, Object> putDedicatedIpInPoolResponse;
    public PutDedicatedIpInPoolResponse withPutDedicatedIpInPoolResponse(java.util.Map<String, Object> putDedicatedIpInPoolResponse) {
        this.putDedicatedIpInPoolResponse = putDedicatedIpInPoolResponse;
        return this;
    }
    public Long statusCode;
    public PutDedicatedIpInPoolResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public PutDedicatedIpInPoolResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}