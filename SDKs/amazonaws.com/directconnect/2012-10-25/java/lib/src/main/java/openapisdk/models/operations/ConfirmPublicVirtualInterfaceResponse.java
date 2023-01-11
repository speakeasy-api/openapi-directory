package openapisdk.models.operations;



public class ConfirmPublicVirtualInterfaceResponse {
    public openapisdk.models.shared.ConfirmPublicVirtualInterfaceResponse confirmPublicVirtualInterfaceResponse;
    public ConfirmPublicVirtualInterfaceResponse withConfirmPublicVirtualInterfaceResponse(openapisdk.models.shared.ConfirmPublicVirtualInterfaceResponse confirmPublicVirtualInterfaceResponse) {
        this.confirmPublicVirtualInterfaceResponse = confirmPublicVirtualInterfaceResponse;
        return this;
    }
    public String contentType;
    public ConfirmPublicVirtualInterfaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directConnectClientException;
    public ConfirmPublicVirtualInterfaceResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public ConfirmPublicVirtualInterfaceResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Long statusCode;
    public ConfirmPublicVirtualInterfaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}