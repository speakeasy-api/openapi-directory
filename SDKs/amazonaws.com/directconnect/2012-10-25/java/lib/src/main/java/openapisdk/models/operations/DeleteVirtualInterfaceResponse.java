package openapisdk.models.operations;



public class DeleteVirtualInterfaceResponse {
    public String contentType;
    public DeleteVirtualInterfaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteVirtualInterfaceResponse deleteVirtualInterfaceResponse;
    public DeleteVirtualInterfaceResponse withDeleteVirtualInterfaceResponse(openapisdk.models.shared.DeleteVirtualInterfaceResponse deleteVirtualInterfaceResponse) {
        this.deleteVirtualInterfaceResponse = deleteVirtualInterfaceResponse;
        return this;
    }
    public Object directConnectClientException;
    public DeleteVirtualInterfaceResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public DeleteVirtualInterfaceResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Long statusCode;
    public DeleteVirtualInterfaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}