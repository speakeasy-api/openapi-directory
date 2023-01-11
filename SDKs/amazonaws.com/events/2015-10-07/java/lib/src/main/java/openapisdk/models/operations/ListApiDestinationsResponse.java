package openapisdk.models.operations;



public class ListApiDestinationsResponse {
    public String contentType;
    public ListApiDestinationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public ListApiDestinationsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public openapisdk.models.shared.ListApiDestinationsResponse listApiDestinationsResponse;
    public ListApiDestinationsResponse withListApiDestinationsResponse(openapisdk.models.shared.ListApiDestinationsResponse listApiDestinationsResponse) {
        this.listApiDestinationsResponse = listApiDestinationsResponse;
        return this;
    }
    public Long statusCode;
    public ListApiDestinationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}