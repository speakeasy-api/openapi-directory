package openapisdk.models.operations;



public class DescribeVirtualInterfacesResponse {
    public String contentType;
    public DescribeVirtualInterfacesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directConnectClientException;
    public DescribeVirtualInterfacesResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public DescribeVirtualInterfacesResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Long statusCode;
    public DescribeVirtualInterfacesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VirtualInterfaces virtualInterfaces;
    public DescribeVirtualInterfacesResponse withVirtualInterfaces(openapisdk.models.shared.VirtualInterfaces virtualInterfaces) {
        this.virtualInterfaces = virtualInterfaces;
        return this;
    }
}