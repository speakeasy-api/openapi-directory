package openapisdk.models.operations;



public class ConfirmTransitVirtualInterfaceResponse {
    public openapisdk.models.shared.ConfirmTransitVirtualInterfaceResponse confirmTransitVirtualInterfaceResponse;
    public ConfirmTransitVirtualInterfaceResponse withConfirmTransitVirtualInterfaceResponse(openapisdk.models.shared.ConfirmTransitVirtualInterfaceResponse confirmTransitVirtualInterfaceResponse) {
        this.confirmTransitVirtualInterfaceResponse = confirmTransitVirtualInterfaceResponse;
        return this;
    }
    public String contentType;
    public ConfirmTransitVirtualInterfaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directConnectClientException;
    public ConfirmTransitVirtualInterfaceResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public ConfirmTransitVirtualInterfaceResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Long statusCode;
    public ConfirmTransitVirtualInterfaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}