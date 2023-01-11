package openapisdk.models.operations;



public class DescribeDirectConnectGatewayAttachmentsResponse {
    public String contentType;
    public DescribeDirectConnectGatewayAttachmentsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDirectConnectGatewayAttachmentsResult describeDirectConnectGatewayAttachmentsResult;
    public DescribeDirectConnectGatewayAttachmentsResponse withDescribeDirectConnectGatewayAttachmentsResult(openapisdk.models.shared.DescribeDirectConnectGatewayAttachmentsResult describeDirectConnectGatewayAttachmentsResult) {
        this.describeDirectConnectGatewayAttachmentsResult = describeDirectConnectGatewayAttachmentsResult;
        return this;
    }
    public Object directConnectClientException;
    public DescribeDirectConnectGatewayAttachmentsResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public DescribeDirectConnectGatewayAttachmentsResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Long statusCode;
    public DescribeDirectConnectGatewayAttachmentsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}