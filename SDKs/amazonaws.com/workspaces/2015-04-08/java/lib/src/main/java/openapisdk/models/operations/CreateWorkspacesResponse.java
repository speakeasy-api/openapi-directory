package openapisdk.models.operations;



public class CreateWorkspacesResponse {
    public String contentType;
    public CreateWorkspacesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateWorkspacesResult createWorkspacesResult;
    public CreateWorkspacesResponse withCreateWorkspacesResult(openapisdk.models.shared.CreateWorkspacesResult createWorkspacesResult) {
        this.createWorkspacesResult = createWorkspacesResult;
        return this;
    }
    public Object invalidParameterValuesException;
    public CreateWorkspacesResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public Object resourceLimitExceededException;
    public CreateWorkspacesResponse withResourceLimitExceededException(Object resourceLimitExceededException) {
        this.resourceLimitExceededException = resourceLimitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateWorkspacesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}