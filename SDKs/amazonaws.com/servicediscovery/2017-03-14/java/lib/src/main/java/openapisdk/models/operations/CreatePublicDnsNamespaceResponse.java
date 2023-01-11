package openapisdk.models.operations;



public class CreatePublicDnsNamespaceResponse {
    public String contentType;
    public CreatePublicDnsNamespaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreatePublicDnsNamespaceResponse createPublicDnsNamespaceResponse;
    public CreatePublicDnsNamespaceResponse withCreatePublicDnsNamespaceResponse(openapisdk.models.shared.CreatePublicDnsNamespaceResponse createPublicDnsNamespaceResponse) {
        this.createPublicDnsNamespaceResponse = createPublicDnsNamespaceResponse;
        return this;
    }
    public Object duplicateRequest;
    public CreatePublicDnsNamespaceResponse withDuplicateRequest(Object duplicateRequest) {
        this.duplicateRequest = duplicateRequest;
        return this;
    }
    public Object invalidInput;
    public CreatePublicDnsNamespaceResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Object namespaceAlreadyExists;
    public CreatePublicDnsNamespaceResponse withNamespaceAlreadyExists(Object namespaceAlreadyExists) {
        this.namespaceAlreadyExists = namespaceAlreadyExists;
        return this;
    }
    public Object resourceLimitExceeded;
    public CreatePublicDnsNamespaceResponse withResourceLimitExceeded(Object resourceLimitExceeded) {
        this.resourceLimitExceeded = resourceLimitExceeded;
        return this;
    }
    public Long statusCode;
    public CreatePublicDnsNamespaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyTagsException;
    public CreatePublicDnsNamespaceResponse withTooManyTagsException(Object tooManyTagsException) {
        this.tooManyTagsException = tooManyTagsException;
        return this;
    }
}