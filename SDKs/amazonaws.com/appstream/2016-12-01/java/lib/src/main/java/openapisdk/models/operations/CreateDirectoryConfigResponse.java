package openapisdk.models.operations;



public class CreateDirectoryConfigResponse {
    public String contentType;
    public CreateDirectoryConfigResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDirectoryConfigResult createDirectoryConfigResult;
    public CreateDirectoryConfigResponse withCreateDirectoryConfigResult(openapisdk.models.shared.CreateDirectoryConfigResult createDirectoryConfigResult) {
        this.createDirectoryConfigResult = createDirectoryConfigResult;
        return this;
    }
    public Object invalidAccountStatusException;
    public CreateDirectoryConfigResponse withInvalidAccountStatusException(Object invalidAccountStatusException) {
        this.invalidAccountStatusException = invalidAccountStatusException;
        return this;
    }
    public Object invalidRoleException;
    public CreateDirectoryConfigResponse withInvalidRoleException(Object invalidRoleException) {
        this.invalidRoleException = invalidRoleException;
        return this;
    }
    public Object limitExceededException;
    public CreateDirectoryConfigResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object operationNotPermittedException;
    public CreateDirectoryConfigResponse withOperationNotPermittedException(Object operationNotPermittedException) {
        this.operationNotPermittedException = operationNotPermittedException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateDirectoryConfigResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateDirectoryConfigResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateDirectoryConfigResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}