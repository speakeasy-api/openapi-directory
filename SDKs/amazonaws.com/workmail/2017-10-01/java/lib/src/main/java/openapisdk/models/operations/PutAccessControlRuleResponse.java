package openapisdk.models.operations;



public class PutAccessControlRuleResponse {
    public String contentType;
    public PutAccessControlRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public PutAccessControlRuleResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object invalidParameterException;
    public PutAccessControlRuleResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object limitExceededException;
    public PutAccessControlRuleResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object organizationNotFoundException;
    public PutAccessControlRuleResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public PutAccessControlRuleResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public java.util.Map<String, Object> putAccessControlRuleResponse;
    public PutAccessControlRuleResponse withPutAccessControlRuleResponse(java.util.Map<String, Object> putAccessControlRuleResponse) {
        this.putAccessControlRuleResponse = putAccessControlRuleResponse;
        return this;
    }
    public Long statusCode;
    public PutAccessControlRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}