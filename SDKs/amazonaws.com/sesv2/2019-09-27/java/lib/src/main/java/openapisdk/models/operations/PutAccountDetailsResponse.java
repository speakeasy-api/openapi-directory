package openapisdk.models.operations;



public class PutAccountDetailsResponse {
    public Object badRequestException;
    public PutAccountDetailsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public PutAccountDetailsResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public PutAccountDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> putAccountDetailsResponse;
    public PutAccountDetailsResponse withPutAccountDetailsResponse(java.util.Map<String, Object> putAccountDetailsResponse) {
        this.putAccountDetailsResponse = putAccountDetailsResponse;
        return this;
    }
    public Long statusCode;
    public PutAccountDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public PutAccountDetailsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}