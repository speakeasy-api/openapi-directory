package openapisdk.models.operations;



public class AllocatePrivateVirtualInterfaceResponse {
    public String contentType;
    public AllocatePrivateVirtualInterfaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directConnectClientException;
    public AllocatePrivateVirtualInterfaceResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public AllocatePrivateVirtualInterfaceResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Object duplicateTagKeysException;
    public AllocatePrivateVirtualInterfaceResponse withDuplicateTagKeysException(Object duplicateTagKeysException) {
        this.duplicateTagKeysException = duplicateTagKeysException;
        return this;
    }
    public Long statusCode;
    public AllocatePrivateVirtualInterfaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyTagsException;
    public AllocatePrivateVirtualInterfaceResponse withTooManyTagsException(Object tooManyTagsException) {
        this.tooManyTagsException = tooManyTagsException;
        return this;
    }
    public openapisdk.models.shared.VirtualInterface virtualInterface;
    public AllocatePrivateVirtualInterfaceResponse withVirtualInterface(openapisdk.models.shared.VirtualInterface virtualInterface) {
        this.virtualInterface = virtualInterface;
        return this;
    }
}