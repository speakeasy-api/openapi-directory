package openapisdk.models.operations;



public class ConfirmPrivateVirtualInterfaceResponse {
    public openapisdk.models.shared.ConfirmPrivateVirtualInterfaceResponse confirmPrivateVirtualInterfaceResponse;
    public ConfirmPrivateVirtualInterfaceResponse withConfirmPrivateVirtualInterfaceResponse(openapisdk.models.shared.ConfirmPrivateVirtualInterfaceResponse confirmPrivateVirtualInterfaceResponse) {
        this.confirmPrivateVirtualInterfaceResponse = confirmPrivateVirtualInterfaceResponse;
        return this;
    }
    public String contentType;
    public ConfirmPrivateVirtualInterfaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directConnectClientException;
    public ConfirmPrivateVirtualInterfaceResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public ConfirmPrivateVirtualInterfaceResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Long statusCode;
    public ConfirmPrivateVirtualInterfaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}