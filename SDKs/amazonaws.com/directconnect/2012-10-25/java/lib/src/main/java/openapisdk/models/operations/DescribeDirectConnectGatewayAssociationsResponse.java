package openapisdk.models.operations;



public class DescribeDirectConnectGatewayAssociationsResponse {
    public String contentType;
    public DescribeDirectConnectGatewayAssociationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDirectConnectGatewayAssociationsResult describeDirectConnectGatewayAssociationsResult;
    public DescribeDirectConnectGatewayAssociationsResponse withDescribeDirectConnectGatewayAssociationsResult(openapisdk.models.shared.DescribeDirectConnectGatewayAssociationsResult describeDirectConnectGatewayAssociationsResult) {
        this.describeDirectConnectGatewayAssociationsResult = describeDirectConnectGatewayAssociationsResult;
        return this;
    }
    public Object directConnectClientException;
    public DescribeDirectConnectGatewayAssociationsResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public DescribeDirectConnectGatewayAssociationsResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Long statusCode;
    public DescribeDirectConnectGatewayAssociationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}