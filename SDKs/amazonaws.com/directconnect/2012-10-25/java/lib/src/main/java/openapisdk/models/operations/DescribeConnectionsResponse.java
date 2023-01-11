package openapisdk.models.operations;



public class DescribeConnectionsResponse {
    public openapisdk.models.shared.Connections connections;
    public DescribeConnectionsResponse withConnections(openapisdk.models.shared.Connections connections) {
        this.connections = connections;
        return this;
    }
    public String contentType;
    public DescribeConnectionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directConnectClientException;
    public DescribeConnectionsResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public DescribeConnectionsResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Long statusCode;
    public DescribeConnectionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}