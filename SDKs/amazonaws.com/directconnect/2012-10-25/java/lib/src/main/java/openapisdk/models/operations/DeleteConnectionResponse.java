package openapisdk.models.operations;



public class DeleteConnectionResponse {
    public openapisdk.models.shared.Connection connection;
    public DeleteConnectionResponse withConnection(openapisdk.models.shared.Connection connection) {
        this.connection = connection;
        return this;
    }
    public String contentType;
    public DeleteConnectionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directConnectClientException;
    public DeleteConnectionResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public DeleteConnectionResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Long statusCode;
    public DeleteConnectionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}