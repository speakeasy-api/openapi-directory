package openapisdk.models.operations;



public class CreateTransitVirtualInterfaceResponse {
    public String contentType;
    public CreateTransitVirtualInterfaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateTransitVirtualInterfaceResult createTransitVirtualInterfaceResult;
    public CreateTransitVirtualInterfaceResponse withCreateTransitVirtualInterfaceResult(openapisdk.models.shared.CreateTransitVirtualInterfaceResult createTransitVirtualInterfaceResult) {
        this.createTransitVirtualInterfaceResult = createTransitVirtualInterfaceResult;
        return this;
    }
    public Object directConnectClientException;
    public CreateTransitVirtualInterfaceResponse withDirectConnectClientException(Object directConnectClientException) {
        this.directConnectClientException = directConnectClientException;
        return this;
    }
    public Object directConnectServerException;
    public CreateTransitVirtualInterfaceResponse withDirectConnectServerException(Object directConnectServerException) {
        this.directConnectServerException = directConnectServerException;
        return this;
    }
    public Object duplicateTagKeysException;
    public CreateTransitVirtualInterfaceResponse withDuplicateTagKeysException(Object duplicateTagKeysException) {
        this.duplicateTagKeysException = duplicateTagKeysException;
        return this;
    }
    public Long statusCode;
    public CreateTransitVirtualInterfaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyTagsException;
    public CreateTransitVirtualInterfaceResponse withTooManyTagsException(Object tooManyTagsException) {
        this.tooManyTagsException = tooManyTagsException;
        return this;
    }
}