package openapisdk.models.operations;



public class DisassociateConnectionFromLagResponse {
    public openapisdk.models.shared.Connection connection;
    public DisassociateConnectionFromLagResponse withConnection(openapisdk.models.shared.Connection connection) {
        this.connection = connection;
        return this;
    }
    public String contentType;
    public DisassociateConnectionFromLagResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directConnectClientException;
    public DisassociateConnectionFromLagResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public DisassociateConnectionFromLagResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Long statusCode;
    public DisassociateConnectionFromLagResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}