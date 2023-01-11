package openapisdk.models.operations;



public class GetNamespaceResponse {
    public String contentType;
    public GetNamespaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetNamespaceResponse getNamespaceResponse;
    public GetNamespaceResponse withGetNamespaceResponse(openapisdk.models.shared.GetNamespaceResponse getNamespaceResponse) {
        this.getNamespaceResponse = getNamespaceResponse;
        return this;
    }
    public Object invalidInput;
    public GetNamespaceResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Object namespaceNotFound;
    public GetNamespaceResponse withNamespaceNotFound(Object namespaceNotFound) {
        this.namespaceNotFound = namespaceNotFound;
        return this;
    }
    public Long statusCode;
    public GetNamespaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}