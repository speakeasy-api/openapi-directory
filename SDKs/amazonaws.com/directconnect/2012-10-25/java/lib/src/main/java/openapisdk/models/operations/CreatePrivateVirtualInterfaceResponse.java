package openapisdk.models.operations;



public class CreatePrivateVirtualInterfaceResponse {
    public String contentType;
    public CreatePrivateVirtualInterfaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directConnectClientException;
    public CreatePrivateVirtualInterfaceResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public CreatePrivateVirtualInterfaceResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Object duplicateTagKeysException;
    public CreatePrivateVirtualInterfaceResponse withDuplicateTagKeysException(Object duplicateTagKeysException) {
        this.duplicateTagKeysException = duplicateTagKeysException;
        return this;
    }
    public Long statusCode;
    public CreatePrivateVirtualInterfaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyTagsException;
    public CreatePrivateVirtualInterfaceResponse withTooManyTagsException(Object tooManyTagsException) {
        this.tooManyTagsException = tooManyTagsException;
        return this;
    }
    public openapisdk.models.shared.VirtualInterface virtualInterface;
    public CreatePrivateVirtualInterfaceResponse withVirtualInterface(openapisdk.models.shared.VirtualInterface virtualInterface) {
        this.virtualInterface = virtualInterface;
        return this;
    }
}