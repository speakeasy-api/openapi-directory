package openapisdk.models.operations;



public class ListEventBusesResponse {
    public String contentType;
    public ListEventBusesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public ListEventBusesResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public openapisdk.models.shared.ListEventBusesResponse listEventBusesResponse;
    public ListEventBusesResponse withListEventBusesResponse(openapisdk.models.shared.ListEventBusesResponse listEventBusesResponse) {
        this.listEventBusesResponse = listEventBusesResponse;
        return this;
    }
    public Long statusCode;
    public ListEventBusesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}