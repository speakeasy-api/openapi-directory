package openapisdk.models.operations;



public class ListSuppressedDestinationsResponse {
    public Object badRequestException;
    public ListSuppressedDestinationsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ListSuppressedDestinationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidNextTokenException;
    public ListSuppressedDestinationsResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public openapisdk.models.shared.ListSuppressedDestinationsResponse listSuppressedDestinationsResponse;
    public ListSuppressedDestinationsResponse withListSuppressedDestinationsResponse(openapisdk.models.shared.ListSuppressedDestinationsResponse listSuppressedDestinationsResponse) {
        this.listSuppressedDestinationsResponse = listSuppressedDestinationsResponse;
        return this;
    }
    public Long statusCode;
    public ListSuppressedDestinationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ListSuppressedDestinationsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}