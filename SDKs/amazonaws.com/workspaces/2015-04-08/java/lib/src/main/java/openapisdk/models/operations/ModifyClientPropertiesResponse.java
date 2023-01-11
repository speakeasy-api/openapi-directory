package openapisdk.models.operations;



public class ModifyClientPropertiesResponse {
    public Object accessDeniedException;
    public ModifyClientPropertiesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ModifyClientPropertiesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValuesException;
    public ModifyClientPropertiesResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public java.util.Map<String, Object> modifyClientPropertiesResult;
    public ModifyClientPropertiesResponse withModifyClientPropertiesResult(java.util.Map<String, Object> modifyClientPropertiesResult) {
        this.modifyClientPropertiesResult = modifyClientPropertiesResult;
        return this;
    }
    public Object resourceNotFoundException;
    public ModifyClientPropertiesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ModifyClientPropertiesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}