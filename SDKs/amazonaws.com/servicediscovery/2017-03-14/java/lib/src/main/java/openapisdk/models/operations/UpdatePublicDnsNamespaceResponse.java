package openapisdk.models.operations;



public class UpdatePublicDnsNamespaceResponse {
    public String contentType;
    public UpdatePublicDnsNamespaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object duplicateRequest;
    public UpdatePublicDnsNamespaceResponse withDuplicateRequest(Object duplicateRequest) {
        this.duplicateRequest = duplicateRequest;
        return this;
    }
    public Object invalidInput;
    public UpdatePublicDnsNamespaceResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Object namespaceNotFound;
    public UpdatePublicDnsNamespaceResponse withNamespaceNotFound(Object namespaceNotFound) {
        this.namespaceNotFound = namespaceNotFound;
        return this;
    }
    public Object resourceInUse;
    public UpdatePublicDnsNamespaceResponse withResourceInUse(Object resourceInUse) {
        this.resourceInUse = resourceInUse;
        return this;
    }
    public Long statusCode;
    public UpdatePublicDnsNamespaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdatePublicDnsNamespaceResponse updatePublicDnsNamespaceResponse;
    public UpdatePublicDnsNamespaceResponse withUpdatePublicDnsNamespaceResponse(openapisdk.models.shared.UpdatePublicDnsNamespaceResponse updatePublicDnsNamespaceResponse) {
        this.updatePublicDnsNamespaceResponse = updatePublicDnsNamespaceResponse;
        return this;
    }
}