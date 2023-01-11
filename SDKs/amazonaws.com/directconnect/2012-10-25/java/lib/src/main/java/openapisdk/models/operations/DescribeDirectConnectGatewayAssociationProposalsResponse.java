package openapisdk.models.operations;



public class DescribeDirectConnectGatewayAssociationProposalsResponse {
    public String contentType;
    public DescribeDirectConnectGatewayAssociationProposalsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDirectConnectGatewayAssociationProposalsResult describeDirectConnectGatewayAssociationProposalsResult;
    public DescribeDirectConnectGatewayAssociationProposalsResponse withDescribeDirectConnectGatewayAssociationProposalsResult(openapisdk.models.shared.DescribeDirectConnectGatewayAssociationProposalsResult describeDirectConnectGatewayAssociationProposalsResult) {
        this.describeDirectConnectGatewayAssociationProposalsResult = describeDirectConnectGatewayAssociationProposalsResult;
        return this;
    }
    public Object directConnectClientException;
    public DescribeDirectConnectGatewayAssociationProposalsResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public DescribeDirectConnectGatewayAssociationProposalsResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Long statusCode;
    public DescribeDirectConnectGatewayAssociationProposalsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}