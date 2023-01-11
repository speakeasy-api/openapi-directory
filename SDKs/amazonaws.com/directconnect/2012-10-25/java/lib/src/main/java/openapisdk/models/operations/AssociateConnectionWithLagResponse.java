package openapisdk.models.operations;



public class AssociateConnectionWithLagResponse {
    public openapisdk.models.shared.Connection connection;
    public AssociateConnectionWithLagResponse withConnection(openapisdk.models.shared.Connection connection) {
        this.connection = connection;
        return this;
    }
    public String contentType;
    public AssociateConnectionWithLagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directConnectClientException;
    public AssociateConnectionWithLagResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public AssociateConnectionWithLagResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Long statusCode;
    public AssociateConnectionWithLagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}