package openapisdk.models.operations;



public class CreateServiceResponse {
    public String contentType;
    public CreateServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateServiceResponse createServiceResponse;
    public CreateServiceResponse withCreateServiceResponse(openapisdk.models.shared.CreateServiceResponse createServiceResponse) {
        this.createServiceResponse = createServiceResponse;
        return this;
    }
    public Object invalidInput;
    public CreateServiceResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public Object namespaceNotFound;
    public CreateServiceResponse withNamespaceNotFound(Object namespaceNotFound) {
        this.namespaceNotFound = namespaceNotFound;
        return this;
    }
    public Object resourceLimitExceeded;
    public CreateServiceResponse withResourceLimitExceeded(Object resourceLimitExceeded) {
        this.resourceLimitExceeded = resourceLimitExceeded;
        return this;
    }
    public Object serviceAlreadyExists;
    public CreateServiceResponse withServiceAlreadyExists(Object serviceAlreadyExists) {
        this.serviceAlreadyExists = serviceAlreadyExists;
        return this;
    }
    public Long statusCode;
    public CreateServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyTagsException;
    public CreateServiceResponse withTooManyTagsException(Object tooManyTagsException) {
        this.tooManyTagsException = tooManyTagsException;
        return this;
    }
}