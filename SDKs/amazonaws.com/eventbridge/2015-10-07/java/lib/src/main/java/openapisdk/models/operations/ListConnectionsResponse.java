package openapisdk.models.operations;



public class ListConnectionsResponse {
    public String contentType;
    public ListConnectionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalException;
    public ListConnectionsResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public openapisdk.models.shared.ListConnectionsResponse listConnectionsResponse;
    public ListConnectionsResponse withListConnectionsResponse(openapisdk.models.shared.ListConnectionsResponse listConnectionsResponse) {
        this.listConnectionsResponse = listConnectionsResponse;
        return this;
    }
    public Long statusCode;
    public ListConnectionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}