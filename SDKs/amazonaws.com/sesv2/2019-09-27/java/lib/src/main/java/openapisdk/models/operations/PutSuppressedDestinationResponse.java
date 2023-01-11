package openapisdk.models.operations;



public class PutSuppressedDestinationResponse {
    public Object badRequestException;
    public PutSuppressedDestinationResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public PutSuppressedDestinationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> putSuppressedDestinationResponse;
    public PutSuppressedDestinationResponse withPutSuppressedDestinationResponse(java.util.Map<String, Object> putSuppressedDestinationResponse) {
        this.putSuppressedDestinationResponse = putSuppressedDestinationResponse;
        return this;
    }
    public Long statusCode;
    public PutSuppressedDestinationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public PutSuppressedDestinationResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}