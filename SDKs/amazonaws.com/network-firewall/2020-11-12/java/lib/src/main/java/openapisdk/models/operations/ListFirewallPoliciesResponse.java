package openapisdk.models.operations;



public class ListFirewallPoliciesResponse {
    public String contentType;
    public ListFirewallPoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public ListFirewallPoliciesResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidRequestException;
    public ListFirewallPoliciesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListFirewallPoliciesResponse listFirewallPoliciesResponse;
    public ListFirewallPoliciesResponse withListFirewallPoliciesResponse(openapisdk.models.shared.ListFirewallPoliciesResponse listFirewallPoliciesResponse) {
        this.listFirewallPoliciesResponse = listFirewallPoliciesResponse;
        return this;
    }
    public Long statusCode;
    public ListFirewallPoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListFirewallPoliciesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}