package openapisdk.models.operations;



public class UpdatePrivateDnsNamespaceResponse {
    public String contentType;
    public UpdatePrivateDnsNamespaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object duplicateRequest;
    public UpdatePrivateDnsNamespaceResponse withDuplicateRequest(Object duplicateRequest) {
        this.duplicateRequest = duplicateRequest;
        return this;
    }
    public Object invalidInput;
    public UpdatePrivateDnsNamespaceResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Object namespaceNotFound;
    public UpdatePrivateDnsNamespaceResponse withNamespaceNotFound(Object namespaceNotFound) {
        this.namespaceNotFound = namespaceNotFound;
        return this;
    }
    public Object resourceInUse;
    public UpdatePrivateDnsNamespaceResponse withResourceInUse(Object resourceInUse) {
        this.resourceInUse = resourceInUse;
        return this;
    }
    public Long statusCode;
    public UpdatePrivateDnsNamespaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdatePrivateDnsNamespaceResponse updatePrivateDnsNamespaceResponse;
    public UpdatePrivateDnsNamespaceResponse withUpdatePrivateDnsNamespaceResponse(openapisdk.models.shared.UpdatePrivateDnsNamespaceResponse updatePrivateDnsNamespaceResponse) {
        this.updatePrivateDnsNamespaceResponse = updatePrivateDnsNamespaceResponse;
        return this;
    }
}