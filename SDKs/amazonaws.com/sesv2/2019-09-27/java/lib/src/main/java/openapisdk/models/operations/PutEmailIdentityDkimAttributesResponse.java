package openapisdk.models.operations;



public class PutEmailIdentityDkimAttributesResponse {
    public Object badRequestException;
    public PutEmailIdentityDkimAttributesResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public PutEmailIdentityDkimAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object notFoundException;
    public PutEmailIdentityDkimAttributesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public java.util.Map<String, Object> putEmailIdentityDkimAttributesResponse;
    public PutEmailIdentityDkimAttributesResponse withPutEmailIdentityDkimAttributesResponse(java.util.Map<String, Object> putEmailIdentityDkimAttributesResponse) {
        this.putEmailIdentityDkimAttributesResponse = putEmailIdentityDkimAttributesResponse;
        return this;
    }
    public Long statusCode;
    public PutEmailIdentityDkimAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public PutEmailIdentityDkimAttributesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}