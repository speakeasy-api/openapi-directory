package openapisdk.models.operations;



public class AssociateFirewallPolicyResponse {
    public openapisdk.models.shared.AssociateFirewallPolicyResponse associateFirewallPolicyResponse;
    public AssociateFirewallPolicyResponse withAssociateFirewallPolicyResponse(openapisdk.models.shared.AssociateFirewallPolicyResponse associateFirewallPolicyResponse) {
        this.associateFirewallPolicyResponse = associateFirewallPolicyResponse;
        return this;
    }
    public String contentType;
    public AssociateFirewallPolicyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public AssociateFirewallPolicyResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidOperationException;
    public AssociateFirewallPolicyResponse withInvalidOperationException(Object invalidOperationException) {
        this.invalidOperationException = invalidOperationException;
        return this;
    }
    public Object invalidRequestException;
    public AssociateFirewallPolicyResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object invalidTokenException;
    public AssociateFirewallPolicyResponse withInvalidTokenException(Object invalidTokenException) {
        this.invalidTokenException = invalidTokenException;
        return this;
    }
    public Object resourceNotFoundException;
    public AssociateFirewallPolicyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AssociateFirewallPolicyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public AssociateFirewallPolicyResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}