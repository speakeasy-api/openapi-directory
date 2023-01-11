package openapisdk.models.operations;



public class ModifyAccountResponse {
    public Object accessDeniedException;
    public ModifyAccountResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ModifyAccountResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValuesException;
    public ModifyAccountResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public Object invalidResourceStateException;
    public ModifyAccountResponse withInvalidResourceStateException(Object invalidResourceStateException) {
        this.invalidResourceStateException = invalidResourceStateException;
        return this;
    }
    public java.util.Map<String, Object> modifyAccountResult;
    public ModifyAccountResponse withModifyAccountResult(java.util.Map<String, Object> modifyAccountResult) {
        this.modifyAccountResult = modifyAccountResult;
        return this;
    }
    public Object resourceNotFoundException;
    public ModifyAccountResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object resourceUnavailableException;
    public ModifyAccountResponse withResourceUnavailableException(Object resourceUnavailableException) {
        this.resourceUnavailableException = resourceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ModifyAccountResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}