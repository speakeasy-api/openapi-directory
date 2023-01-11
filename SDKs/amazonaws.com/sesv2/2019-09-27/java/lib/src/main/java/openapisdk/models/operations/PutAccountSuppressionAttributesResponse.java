package openapisdk.models.operations;



public class PutAccountSuppressionAttributesResponse {
    public Object badRequestException;
    public PutAccountSuppressionAttributesResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public PutAccountSuppressionAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> putAccountSuppressionAttributesResponse;
    public PutAccountSuppressionAttributesResponse withPutAccountSuppressionAttributesResponse(java.util.Map<String, Object> putAccountSuppressionAttributesResponse) {
        this.putAccountSuppressionAttributesResponse = putAccountSuppressionAttributesResponse;
        return this;
    }
    public Long statusCode;
    public PutAccountSuppressionAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public PutAccountSuppressionAttributesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}