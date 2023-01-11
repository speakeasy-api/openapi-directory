package openapisdk.models.operations;



public class AssociateVirtualInterfaceResponse {
    public String contentType;
    public AssociateVirtualInterfaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directConnectClientException;
    public AssociateVirtualInterfaceResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public AssociateVirtualInterfaceResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Long statusCode;
    public AssociateVirtualInterfaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VirtualInterface virtualInterface;
    public AssociateVirtualInterfaceResponse withVirtualInterface(openapisdk.models.shared.VirtualInterface virtualInterface) {
        this.virtualInterface = virtualInterface;
        return this;
    }
}