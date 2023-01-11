package openapisdk.models.operations;



public class CreatePrivateDnsNamespaceResponse {
    public String contentType;
    public CreatePrivateDnsNamespaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreatePrivateDnsNamespaceResponse createPrivateDnsNamespaceResponse;
    public CreatePrivateDnsNamespaceResponse withCreatePrivateDnsNamespaceResponse(openapisdk.models.shared.CreatePrivateDnsNamespaceResponse createPrivateDnsNamespaceResponse) {
        this.createPrivateDnsNamespaceResponse = createPrivateDnsNamespaceResponse;
        return this;
    }
    public Object duplicateRequest;
    public CreatePrivateDnsNamespaceResponse withDuplicateRequest(Object duplicateRequest) {
        this.duplicateRequest = duplicateRequest;
        return this;
    }
    public Object invalidInput;
    public CreatePrivateDnsNamespaceResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Object namespaceAlreadyExists;
    public CreatePrivateDnsNamespaceResponse withNamespaceAlreadyExists(Object namespaceAlreadyExists) {
        this.namespaceAlreadyExists = namespaceAlreadyExists;
        return this;
    }
    public Object resourceLimitExceeded;
    public CreatePrivateDnsNamespaceResponse withResourceLimitExceeded(Object resourceLimitExceeded) {
        this.resourceLimitExceeded = resourceLimitExceeded;
        return this;
    }
    public Long statusCode;
    public CreatePrivateDnsNamespaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyTagsException;
    public CreatePrivateDnsNamespaceResponse withTooManyTagsException(Object tooManyTagsException) {
        this.tooManyTagsException = tooManyTagsException;
        return this;
    }
}