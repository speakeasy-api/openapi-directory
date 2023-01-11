package openapisdk.models.operations;



public class DeleteSuppressedDestinationResponse {
    public Object badRequestException;
    public DeleteSuppressedDestinationResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteSuppressedDestinationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteSuppressedDestinationResponse;
    public DeleteSuppressedDestinationResponse withDeleteSuppressedDestinationResponse(java.util.Map<String, Object> deleteSuppressedDestinationResponse) {
        this.deleteSuppressedDestinationResponse = deleteSuppressedDestinationResponse;
        return this;
    }
    public Object notFoundException;
    public DeleteSuppressedDestinationResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteSuppressedDestinationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteSuppressedDestinationResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}