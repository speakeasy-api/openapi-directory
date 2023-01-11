package openapisdk.models.operations;



public class AllocateConnectionOnInterconnectResponse {
    public openapisdk.models.shared.Connection connection;
    public AllocateConnectionOnInterconnectResponse withConnection(openapisdk.models.shared.Connection connection) {
        this.connection = connection;
        return this;
    }
    public String contentType;
    public AllocateConnectionOnInterconnectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directConnectClientException;
    public AllocateConnectionOnInterconnectResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public AllocateConnectionOnInterconnectResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Long statusCode;
    public AllocateConnectionOnInterconnectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}