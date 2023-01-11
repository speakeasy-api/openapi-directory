package openapisdk.models.operations;



public class ListAccessPoliciesResponse {
    public String contentType;
    public ListAccessPoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListAccessPoliciesResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListAccessPoliciesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListAccessPoliciesResponse listAccessPoliciesResponse;
    public ListAccessPoliciesResponse withListAccessPoliciesResponse(openapisdk.models.shared.ListAccessPoliciesResponse listAccessPoliciesResponse) {
        this.listAccessPoliciesResponse = listAccessPoliciesResponse;
        return this;
    }
    public Long statusCode;
    public ListAccessPoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListAccessPoliciesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}