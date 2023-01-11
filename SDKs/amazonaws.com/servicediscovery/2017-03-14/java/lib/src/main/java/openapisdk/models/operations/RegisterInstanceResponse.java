package openapisdk.models.operations;



public class RegisterInstanceResponse {
    public String contentType;
    public RegisterInstanceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object duplicateRequest;
    public RegisterInstanceResponse withDuplicateRequest(Object duplicateRequest) {
        this.duplicateRequest = duplicateRequest;
        return this;
    }
    public Object invalidInput;
    public RegisterInstanceResponse withInvalidInput(Object invalidInput) {
        this.invalidInput = invalidInput;
        return this;
    }
    public openapisdk.models.shared.RegisterInstanceResponse registerInstanceResponse;
    public RegisterInstanceResponse withRegisterInstanceResponse(openapisdk.models.shared.RegisterInstanceResponse registerInstanceResponse) {
        this.registerInstanceResponse = registerInstanceResponse;
        return this;
    }
    public Object resourceInUse;
    public RegisterInstanceResponse withResourceInUse(Object resourceInUse) {
        this.resourceInUse = resourceInUse;
        return this;
    }
    public Object resourceLimitExceeded;
    public RegisterInstanceResponse withResourceLimitExceeded(Object resourceLimitExceeded) {
        this.resourceLimitExceeded = resourceLimitExceeded;
        return this;
    }
    public Object serviceNotFound;
    public RegisterInstanceResponse withServiceNotFound(Object serviceNotFound) {
        this.serviceNotFound = serviceNotFound;
        return this;
    }
    public Long statusCode;
    public RegisterInstanceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}