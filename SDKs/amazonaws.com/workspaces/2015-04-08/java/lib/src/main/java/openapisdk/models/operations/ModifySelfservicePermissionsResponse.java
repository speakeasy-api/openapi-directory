package openapisdk.models.operations;



public class ModifySelfservicePermissionsResponse {
    public Object accessDeniedException;
    public ModifySelfservicePermissionsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ModifySelfservicePermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValuesException;
    public ModifySelfservicePermissionsResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public java.util.Map<String, Object> modifySelfservicePermissionsResult;
    public ModifySelfservicePermissionsResponse withModifySelfservicePermissionsResult(java.util.Map<String, Object> modifySelfservicePermissionsResult) {
        this.modifySelfservicePermissionsResult = modifySelfservicePermissionsResult;
        return this;
    }
    public Object resourceNotFoundException;
    public ModifySelfservicePermissionsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ModifySelfservicePermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}