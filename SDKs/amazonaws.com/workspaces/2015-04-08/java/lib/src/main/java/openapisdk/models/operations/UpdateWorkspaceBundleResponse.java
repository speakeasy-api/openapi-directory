package openapisdk.models.operations;



public class UpdateWorkspaceBundleResponse {
    public Object accessDeniedException;
    public UpdateWorkspaceBundleResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateWorkspaceBundleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValuesException;
    public UpdateWorkspaceBundleResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateWorkspaceBundleResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object resourceUnavailableException;
    public UpdateWorkspaceBundleResponse withResourceUnavailableException(Object resourceUnavailableException) {
        this.resourceUnavailableException = resourceUnavailableException;
        return this;
    }
    public Long statusCode;
    public UpdateWorkspaceBundleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public java.util.Map<String, Object> updateWorkspaceBundleResult;
    public UpdateWorkspaceBundleResponse withUpdateWorkspaceBundleResult(java.util.Map<String, Object> updateWorkspaceBundleResult) {
        this.updateWorkspaceBundleResult = updateWorkspaceBundleResult;
        return this;
    }
}