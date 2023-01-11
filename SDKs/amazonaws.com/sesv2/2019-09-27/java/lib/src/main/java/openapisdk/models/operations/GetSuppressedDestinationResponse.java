package openapisdk.models.operations;



public class GetSuppressedDestinationResponse {
    public Object badRequestException;
    public GetSuppressedDestinationResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetSuppressedDestinationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetSuppressedDestinationResponse getSuppressedDestinationResponse;
    public GetSuppressedDestinationResponse withGetSuppressedDestinationResponse(openapisdk.models.shared.GetSuppressedDestinationResponse getSuppressedDestinationResponse) {
        this.getSuppressedDestinationResponse = getSuppressedDestinationResponse;
        return this;
    }
    public Object notFoundException;
    public GetSuppressedDestinationResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetSuppressedDestinationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetSuppressedDestinationResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}