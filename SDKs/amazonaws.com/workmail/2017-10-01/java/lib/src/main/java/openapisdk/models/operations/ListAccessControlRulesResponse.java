package openapisdk.models.operations;



public class ListAccessControlRulesResponse {
    public String contentType;
    public ListAccessControlRulesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.ListAccessControlRulesResponse listAccessControlRulesResponse;
    public ListAccessControlRulesResponse withListAccessControlRulesResponse(openapisdk.models.shared.ListAccessControlRulesResponse listAccessControlRulesResponse) {
        this.listAccessControlRulesResponse = listAccessControlRulesResponse;
        return this;
    }
    public Object organizationNotFoundException;
    public ListAccessControlRulesResponse withOrganizationNotFoundException(Object organizationNotFoundException) {
        this.organizationNotFoundException = organizationNotFoundException;
        return this;
    }
    public Object organizationStateException;
    public ListAccessControlRulesResponse withOrganizationStateException(Object organizationStateException) {
        this.organizationStateException = organizationStateException;
        return this;
    }
    public Long statusCode;
    public ListAccessControlRulesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}