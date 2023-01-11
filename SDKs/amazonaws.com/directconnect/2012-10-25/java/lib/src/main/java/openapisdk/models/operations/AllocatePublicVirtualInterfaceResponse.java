package openapisdk.models.operations;



public class AllocatePublicVirtualInterfaceResponse {
    public String contentType;
    public AllocatePublicVirtualInterfaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directConnectClientException;
    public AllocatePublicVirtualInterfaceResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public AllocatePublicVirtualInterfaceResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Object duplicateTagKeysException;
    public AllocatePublicVirtualInterfaceResponse withDuplicateTagKeysException(Object duplicateTagKeysException) {
        this.duplicateTagKeysException = duplicateTagKeysException;
        return this;
    }
    public Long statusCode;
    public AllocatePublicVirtualInterfaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyTagsException;
    public AllocatePublicVirtualInterfaceResponse withTooManyTagsException(Object tooManyTagsException) {
        this.tooManyTagsException = tooManyTagsException;
        return this;
    }
    public openapisdk.models.shared.VirtualInterface virtualInterface;
    public AllocatePublicVirtualInterfaceResponse withVirtualInterface(openapisdk.models.shared.VirtualInterface virtualInterface) {
        this.virtualInterface = virtualInterface;
        return this;
    }
}