package openapisdk.models.operations;



public class DeleteOrganizationConfigRuleResponse {
    public String contentType;
    public DeleteOrganizationConfigRuleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object noSuchOrganizationConfigRuleException;
    public DeleteOrganizationConfigRuleResponse withNoSuchOrganizationConfigRuleException(Object noSuchOrganizationConfigRuleException) {
        this.noSuchOrganizationConfigRuleException = noSuchOrganizationConfigRuleException;
        return this;
    }
    public Object organizationAccessDeniedException;
    public DeleteOrganizationConfigRuleResponse withOrganizationAccessDeniedException(Object organizationAccessDeniedException) {
        this.organizationAccessDeniedException = organizationAccessDeniedException;
        return this;
    }
    public Object resourceInUseException;
    public DeleteOrganizationConfigRuleResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Long statusCode;
    public DeleteOrganizationConfigRuleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}