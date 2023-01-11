package openapisdk.models.operations;



public class DescribeVirtualGatewaysResponse {
    public String contentType;
    public DescribeVirtualGatewaysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directConnectClientException;
    public DescribeVirtualGatewaysResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public DescribeVirtualGatewaysResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Long statusCode;
    public DescribeVirtualGatewaysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VirtualGateways virtualGateways;
    public DescribeVirtualGatewaysResponse withVirtualGateways(openapisdk.models.shared.VirtualGateways virtualGateways) {
        this.virtualGateways = virtualGateways;
        return this;
    }
}