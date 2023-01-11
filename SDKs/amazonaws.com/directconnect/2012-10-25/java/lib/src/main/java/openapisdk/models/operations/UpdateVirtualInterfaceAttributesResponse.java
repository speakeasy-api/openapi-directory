package openapisdk.models.operations;



public class UpdateVirtualInterfaceAttributesResponse {
    public String contentType;
    public UpdateVirtualInterfaceAttributesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directConnectClientException;
    public UpdateVirtualInterfaceAttributesResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public UpdateVirtualInterfaceAttributesResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Long statusCode;
    public UpdateVirtualInterfaceAttributesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.VirtualInterface virtualInterface;
    public UpdateVirtualInterfaceAttributesResponse withVirtualInterface(openapisdk.models.shared.VirtualInterface virtualInterface) {
        this.virtualInterface = virtualInterface;
        return this;
    }
}