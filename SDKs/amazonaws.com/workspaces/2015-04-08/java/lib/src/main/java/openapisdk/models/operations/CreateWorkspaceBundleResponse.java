package openapisdk.models.operations;



public class CreateWorkspaceBundleResponse {
    public Object accessDeniedException;
    public CreateWorkspaceBundleResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CreateWorkspaceBundleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateWorkspaceBundleResult createWorkspaceBundleResult;
    public CreateWorkspaceBundleResponse withCreateWorkspaceBundleResult(openapisdk.models.shared.CreateWorkspaceBundleResult createWorkspaceBundleResult) {
        this.createWorkspaceBundleResult = createWorkspaceBundleResult;
        return this;
    }
    public Object invalidParameterValuesException;
    public CreateWorkspaceBundleResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateWorkspaceBundleResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceLimitExceededException;
    public CreateWorkspaceBundleResponse withResourceLimitExceededException(Object resourceLimitExceededException) {
        this.resourceLimitExceededException = resourceLimitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateWorkspaceBundleResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object resourceUnavailableException;
    public CreateWorkspaceBundleResponse withResourceUnavailableException(Object resourceUnavailableException) {
        this.resourceUnavailableException = resourceUnavailableException;
        return this;
    }
    public Long statusCode;
    public CreateWorkspaceBundleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}