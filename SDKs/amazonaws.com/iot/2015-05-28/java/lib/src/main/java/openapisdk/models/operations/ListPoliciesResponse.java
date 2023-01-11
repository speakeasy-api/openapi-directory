package openapisdk.models.operations;



public class ListPoliciesResponse {
    public String contentType;
    public ListPoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListPoliciesResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListPoliciesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListPoliciesResponse listPoliciesResponse;
    public ListPoliciesResponse withListPoliciesResponse(openapisdk.models.shared.ListPoliciesResponse listPoliciesResponse) {
        this.listPoliciesResponse = listPoliciesResponse;
        return this;
    }
    public Object serviceUnavailableException;
    public ListPoliciesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListPoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListPoliciesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public ListPoliciesResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}