package openapisdk.models.operations;



public class AllocateTransitVirtualInterfaceResponse {
    public openapisdk.models.shared.AllocateTransitVirtualInterfaceResult allocateTransitVirtualInterfaceResult;
    public AllocateTransitVirtualInterfaceResponse withAllocateTransitVirtualInterfaceResult(openapisdk.models.shared.AllocateTransitVirtualInterfaceResult allocateTransitVirtualInterfaceResult) {
        this.allocateTransitVirtualInterfaceResult = allocateTransitVirtualInterfaceResult;
        return this;
    }
    public String contentType;
    public AllocateTransitVirtualInterfaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object directConnectClientException;
    public AllocateTransitVirtualInterfaceResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public AllocateTransitVirtualInterfaceResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Object duplicateTagKeysException;
    public AllocateTransitVirtualInterfaceResponse withDuplicateTagKeysException(Object duplicateTagKeysException) {
        this.duplicateTagKeysException = duplicateTagKeysException;
        return this;
    }
    public Long statusCode;
    public AllocateTransitVirtualInterfaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyTagsException;
    public AllocateTransitVirtualInterfaceResponse withTooManyTagsException(Object tooManyTagsException) {
        this.tooManyTagsException = tooManyTagsException;
        return this;
    }
}