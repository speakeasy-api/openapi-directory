package openapisdk.models.operations;



public class UpdateHttpNamespaceResponse {
    public String contentType;
    public UpdateHttpNamespaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object duplicateRequest;
    public UpdateHttpNamespaceResponse withDuplicateRequest(Object duplicateRequest) {
        this.duplicateRequest = duplicateRequest;
        return this;
    }
    public Object invalidInput;
    public UpdateHttpNamespaceResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Object namespaceNotFound;
    public UpdateHttpNamespaceResponse withNamespaceNotFound(Object namespaceNotFound) {
        this.namespaceNotFound = namespaceNotFound;
        return this;
    }
    public Object resourceInUse;
    public UpdateHttpNamespaceResponse withResourceInUse(Object resourceInUse) {
        this.resourceInUse = resourceInUse;
        return this;
    }
    public Long statusCode;
    public UpdateHttpNamespaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateHttpNamespaceResponse updateHttpNamespaceResponse;
    public UpdateHttpNamespaceResponse withUpdateHttpNamespaceResponse(openapisdk.models.shared.UpdateHttpNamespaceResponse updateHttpNamespaceResponse) {
        this.updateHttpNamespaceResponse = updateHttpNamespaceResponse;
        return this;
    }
}