package openapisdk.models.operations;



public class RevokeIpRulesResponse {
    public Object accessDeniedException;
    public RevokeIpRulesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public RevokeIpRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValuesException;
    public RevokeIpRulesResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public Object invalidResourceStateException;
    public RevokeIpRulesResponse withInvalidResourceStateException(Object invalidResourceStateException) {
        this.invalidResourceStateException = invalidResourceStateException;
        return this;
    }
    public Object resourceNotFoundException;
    public RevokeIpRulesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public java.util.Map<String, Object> revokeIpRulesResult;
    public RevokeIpRulesResponse withRevokeIpRulesResult(java.util.Map<String, Object> revokeIpRulesResult) {
        this.revokeIpRulesResult = revokeIpRulesResult;
        return this;
    }
    public Long statusCode;
    public RevokeIpRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}