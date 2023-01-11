package openapisdk.models.operations;



public class PutAccountSendingAttributesResponse {
    public Object badRequestException;
    public PutAccountSendingAttributesResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public PutAccountSendingAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> putAccountSendingAttributesResponse;
    public PutAccountSendingAttributesResponse withPutAccountSendingAttributesResponse(java.util.Map<String, Object> putAccountSendingAttributesResponse) {
        this.putAccountSendingAttributesResponse = putAccountSendingAttributesResponse;
        return this;
    }
    public Long statusCode;
    public PutAccountSendingAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public PutAccountSendingAttributesResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}