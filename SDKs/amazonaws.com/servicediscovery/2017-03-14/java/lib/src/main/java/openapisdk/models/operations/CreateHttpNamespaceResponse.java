package openapisdk.models.operations;



public class CreateHttpNamespaceResponse {
    public String contentType;
    public CreateHttpNamespaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateHttpNamespaceResponse createHttpNamespaceResponse;
    public CreateHttpNamespaceResponse withCreateHttpNamespaceResponse(openapisdk.models.shared.CreateHttpNamespaceResponse createHttpNamespaceResponse) {
        this.createHttpNamespaceResponse = createHttpNamespaceResponse;
        return this;
    }
    public Object duplicateRequest;
    public CreateHttpNamespaceResponse withDuplicateRequest(Object duplicateRequest) {
        this.duplicateRequest = duplicateRequest;
        return this;
    }
    public Object invalidInput;
    public CreateHttpNamespaceResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Object namespaceAlreadyExists;
    public CreateHttpNamespaceResponse withNamespaceAlreadyExists(Object namespaceAlreadyExists) {
        this.namespaceAlreadyExists = namespaceAlreadyExists;
        return this;
    }
    public Object resourceLimitExceeded;
    public CreateHttpNamespaceResponse withResourceLimitExceeded(Object resourceLimitExceeded) {
        this.resourceLimitExceeded = resourceLimitExceeded;
        return this;
    }
    public Long statusCode;
    public CreateHttpNamespaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyTagsException;
    public CreateHttpNamespaceResponse withTooManyTagsException(Object tooManyTagsException) {
        this.tooManyTagsException = tooManyTagsException;
        return this;
    }
}