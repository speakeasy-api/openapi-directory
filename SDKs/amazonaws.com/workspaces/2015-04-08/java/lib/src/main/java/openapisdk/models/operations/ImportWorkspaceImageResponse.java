package openapisdk.models.operations;



public class ImportWorkspaceImageResponse {
    public Object accessDeniedException;
    public ImportWorkspaceImageResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ImportWorkspaceImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ImportWorkspaceImageResult importWorkspaceImageResult;
    public ImportWorkspaceImageResponse withImportWorkspaceImageResult(openapisdk.models.shared.ImportWorkspaceImageResult importWorkspaceImageResult) {
        this.importWorkspaceImageResult = importWorkspaceImageResult;
        return this;
    }
    public Object invalidParameterValuesException;
    public ImportWorkspaceImageResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public Object operationNotSupportedException;
    public ImportWorkspaceImageResponse withOperationNotSupportedException(Object operationNotSupportedException) {
        this.operationNotSupportedException = operationNotSupportedException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public ImportWorkspaceImageResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceLimitExceededException;
    public ImportWorkspaceImageResponse withResourceLimitExceededException(Object resourceLimitExceededException) {
        this.resourceLimitExceededException = resourceLimitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public ImportWorkspaceImageResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ImportWorkspaceImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}