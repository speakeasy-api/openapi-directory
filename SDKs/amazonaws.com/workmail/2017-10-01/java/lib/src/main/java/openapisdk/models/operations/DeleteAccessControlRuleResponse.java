package openapisdk.models.operations;



public class DeleteAccessControlRuleResponse {
    public String contentType;
    public DeleteAccessControlRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteAccessControlRuleResponse;
    public DeleteAccessControlRuleResponse withDeleteAccessControlRuleResponse(java.util.Map<String, Object> deleteAccessControlRuleResponse) {
        this.deleteAccessControlRuleResponse = deleteAccessControlRuleResponse;
        return this;
    }
    public Object organizationNotFoundException;
    public DeleteAccessControlRuleResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public DeleteAccessControlRuleResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Long statusCode;
    public DeleteAccessControlRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}