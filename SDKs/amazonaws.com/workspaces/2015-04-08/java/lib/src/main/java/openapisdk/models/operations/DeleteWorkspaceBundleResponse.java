package openapisdk.models.operations;



public class DeleteWorkspaceBundleResponse {
    public Object accessDeniedException;
    public DeleteWorkspaceBundleResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteWorkspaceBundleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteWorkspaceBundleResult;
    public DeleteWorkspaceBundleResponse withDeleteWorkspaceBundleResult(java.util.Map<String, Object> deleteWorkspaceBundleResult) {
        this.deleteWorkspaceBundleResult = deleteWorkspaceBundleResult;
        return this;
    }
    public Object invalidParameterValuesException;
    public DeleteWorkspaceBundleResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public Object resourceAssociatedException;
    public DeleteWorkspaceBundleResponse withResourceAssociatedException(Object resourceAssociatedException) {
        this.resourceAssociatedException = resourceAssociatedException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteWorkspaceBundleResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteWorkspaceBundleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}