package openapisdk.models.operations;



public class CopyWorkspaceImageResponse {
    public Object accessDeniedException;
    public CopyWorkspaceImageResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public CopyWorkspaceImageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CopyWorkspaceImageResult copyWorkspaceImageResult;
    public CopyWorkspaceImageResponse withCopyWorkspaceImageResult(openapisdk.models.shared.CopyWorkspaceImageResult copyWorkspaceImageResult) {
        this.copyWorkspaceImageResult = copyWorkspaceImageResult;
        return this;
    }
    public Object invalidParameterValuesException;
    public CopyWorkspaceImageResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public Object operationNotSupportedException;
    public CopyWorkspaceImageResponse withOperationNotSupportedException(Object operationNotSupportedException) {
        this.operationNotSupportedException = operationNotSupportedException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CopyWorkspaceImageResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceLimitExceededException;
    public CopyWorkspaceImageResponse withResourceLimitExceededException(Object resourceLimitExceededException) {
        this.resourceLimitExceededException = resourceLimitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public CopyWorkspaceImageResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object resourceUnavailableException;
    public CopyWorkspaceImageResponse withResourceUnavailableException(Object resourceUnavailableException) {
        this.resourceUnavailableException = resourceUnavailableException;
        return this;
    }
    public Long statusCode;
    public CopyWorkspaceImageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}