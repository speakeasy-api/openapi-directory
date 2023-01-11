package openapisdk.models.operations;



public class DeleteNamespaceResponse {
    public String contentType;
    public DeleteNamespaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteNamespaceResponse deleteNamespaceResponse;
    public DeleteNamespaceResponse withDeleteNamespaceResponse(openapisdk.models.shared.DeleteNamespaceResponse deleteNamespaceResponse) {
        this.deleteNamespaceResponse = deleteNamespaceResponse;
        return this;
    }
    public Object duplicateRequest;
    public DeleteNamespaceResponse withDuplicateRequest(Object duplicateRequest) {
        this.duplicateRequest = duplicateRequest;
        return this;
    }
    public Object invalidInput;
    public DeleteNamespaceResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Object namespaceNotFound;
    public DeleteNamespaceResponse withNamespaceNotFound(Object namespaceNotFound) {
        this.namespaceNotFound = namespaceNotFound;
        return this;
    }
    public Object resourceInUse;
    public DeleteNamespaceResponse withResourceInUse(Object resourceInUse) {
        this.resourceInUse = resourceInUse;
        return this;
    }
    public Long statusCode;
    public DeleteNamespaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}