package openapisdk.models.operations;



public class DescribeConnectionsOnInterconnectResponse {
    public openapisdk.models.shared.Connections connections;
    public DescribeConnectionsOnInterconnectResponse withConnections(openapisdk.models.shared.Connections connections) {
        this.connections = connections;
        return this;
    }
    public String contentType;
    public DescribeConnectionsOnInterconnectResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directConnectClientException;
    public DescribeConnectionsOnInterconnectResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public DescribeConnectionsOnInterconnectResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Long statusCode;
    public DescribeConnectionsOnInterconnectResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}