package openapisdk.models.operations;



public class ListPrincipalPoliciesResponse {
    public String contentType;
    public ListPrincipalPoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListPrincipalPoliciesResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListPrincipalPoliciesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListPrincipalPoliciesResponse listPrincipalPoliciesResponse;
    public ListPrincipalPoliciesResponse withListPrincipalPoliciesResponse(openapisdk.models.shared.ListPrincipalPoliciesResponse listPrincipalPoliciesResponse) {
        this.listPrincipalPoliciesResponse = listPrincipalPoliciesResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListPrincipalPoliciesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListPrincipalPoliciesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListPrincipalPoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListPrincipalPoliciesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public ListPrincipalPoliciesResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}