package openapisdk.models.operations;



public class AuthorizeIpRulesResponse {
    public Object accessDeniedException;
    public AuthorizeIpRulesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public java.util.Map<String, Object> authorizeIpRulesResult;
    public AuthorizeIpRulesResponse withAuthorizeIpRulesResult(java.util.Map<String, Object> authorizeIpRulesResult) {
        this.authorizeIpRulesResult = authorizeIpRulesResult;
        return this;
    }
    public String contentType;
    public AuthorizeIpRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidParameterValuesException;
    public AuthorizeIpRulesResponse withInvalidParameterValuesException(Object invalidParameterValuesException) {
        this.invalidParameterValuesException = invalidParameterValuesException;
        return this;
    }
    public Object invalidResourceStateException;
    public AuthorizeIpRulesResponse withInvalidResourceStateException(Object invalidResourceStateException) {
        this.invalidResourceStateException = invalidResourceStateException;
        return this;
    }
    public Object resourceLimitExceededException;
    public AuthorizeIpRulesResponse withResourceLimitExceededException(Object resourceLimitExceededException) {
        this.resourceLimitExceededException = resourceLimitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public AuthorizeIpRulesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AuthorizeIpRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}