package openapisdk.models.operations;



public class DescribeHostedConnectionsResponse {
    public openapisdk.models.shared.Connections connections;
    public DescribeHostedConnectionsResponse withConnections(openapisdk.models.shared.Connections connections) {
        this.connections = connections;
        return this;
    }
    public String contentType;
    public DescribeHostedConnectionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directConnectClientException;
    public DescribeHostedConnectionsResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public DescribeHostedConnectionsResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Long statusCode;
    public DescribeHostedConnectionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}