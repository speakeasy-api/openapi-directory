package openapisdk.models.operations;



public class ListFirewallsResponse {
    public String contentType;
    public ListFirewallsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public ListFirewallsResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidRequestException;
    public ListFirewallsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListFirewallsResponse listFirewallsResponse;
    public ListFirewallsResponse withListFirewallsResponse(openapisdk.models.shared.ListFirewallsResponse listFirewallsResponse) {
        this.listFirewallsResponse = listFirewallsResponse;
        return this;
    }
    public Long statusCode;
    public ListFirewallsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListFirewallsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}