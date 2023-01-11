package openapisdk.models.operations;



public class ListConnectionsResponse {
    public String contentType;
    public ListConnectionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceErrorException;
    public ListConnectionsResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidRequestException;
    public ListConnectionsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
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