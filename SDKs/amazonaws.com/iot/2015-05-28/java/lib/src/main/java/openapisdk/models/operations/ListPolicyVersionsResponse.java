package openapisdk.models.operations;



public class ListPolicyVersionsResponse {
    public String contentType;
    public ListPolicyVersionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListPolicyVersionsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListPolicyVersionsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListPolicyVersionsResponse listPolicyVersionsResponse;
    public ListPolicyVersionsResponse withListPolicyVersionsResponse(openapisdk.models.shared.ListPolicyVersionsResponse listPolicyVersionsResponse) {
        this.listPolicyVersionsResponse = listPolicyVersionsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListPolicyVersionsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListPolicyVersionsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListPolicyVersionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListPolicyVersionsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public ListPolicyVersionsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}