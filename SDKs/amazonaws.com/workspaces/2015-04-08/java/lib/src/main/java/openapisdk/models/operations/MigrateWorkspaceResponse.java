package openapisdk.models.operations;



public class MigrateWorkspaceResponse {
    public Object accessDeniedException;
    public MigrateWorkspaceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public MigrateWorkspaceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValuesException;
    public MigrateWorkspaceResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public openapisdk.models.shared.MigrateWorkspaceResult migrateWorkspaceResult;
    public MigrateWorkspaceResponse withMigrateWorkspaceResult(openapisdk.models.shared.MigrateWorkspaceResult migrateWorkspaceResult) {
        this.migrateWorkspaceResult = migrateWorkspaceResult;
        return this;
    }
    public Object operationInProgressException;
    public MigrateWorkspaceResponse withOperationInProgressException(Object operationInProgressException) {
        this.operationInProgressException = operationInProgressException;
        return this;
    }
    public Object operationNotSupportedException;
    public MigrateWorkspaceResponse withOperationNotSupportedException(Object operationNotSupportedException) {
        this.operationNotSupportedException = operationNotSupportedException;
        return this;
    }
    public Object resourceNotFoundException;
    public MigrateWorkspaceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object resourceUnavailableException;
    public MigrateWorkspaceResponse withResourceUnavailableException(Object resourceUnavailableException) {
        this.resourceUnavailableException = resourceUnavailableException;
        return this;
    }
    public Long statusCode;
    public MigrateWorkspaceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}