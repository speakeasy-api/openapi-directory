package openapisdk.models.operations;



public class CreateRegistryResponse {
    public Object accessDeniedException;
    public CreateRegistryResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object alreadyExistsException;
    public CreateRegistryResponse withAlreadyExistsException(Object alreadyExistsException) {
        this.alreadyExistsException = alreadyExistsException;
        return this;
    }
    public String contentType;
    public CreateRegistryResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateRegistryResponse createRegistryResponse;
    public CreateRegistryResponse withCreateRegistryResponse(openapisdk.models.shared.CreateRegistryResponse createRegistryResponse) {
        this.createRegistryResponse = createRegistryResponse;
        return this;
    }
    public Object internalServiceException;
    public CreateRegistryResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public CreateRegistryResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object resourceNumberLimitExceededException;
    public CreateRegistryResponse withResourceNumberLimitExceededException(Object resourceNumberLimitExceededException) {
        this.resourceNumberLimitExceededException = resourceNumberLimitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateRegistryResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}