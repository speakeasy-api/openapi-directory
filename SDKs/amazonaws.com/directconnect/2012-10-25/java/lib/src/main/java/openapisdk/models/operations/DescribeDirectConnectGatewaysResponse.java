package openapisdk.models.operations;



public class DescribeDirectConnectGatewaysResponse {
    public String contentType;
    public DescribeDirectConnectGatewaysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDirectConnectGatewaysResult describeDirectConnectGatewaysResult;
    public DescribeDirectConnectGatewaysResponse withDescribeDirectConnectGatewaysResult(openapisdk.models.shared.DescribeDirectConnectGatewaysResult describeDirectConnectGatewaysResult) {
        this.describeDirectConnectGatewaysResult = describeDirectConnectGatewaysResult;
        return this;
    }
    public Object directConnectClientException;
    public DescribeDirectConnectGatewaysResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public DescribeDirectConnectGatewaysResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Long statusCode;
    public DescribeDirectConnectGatewaysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}