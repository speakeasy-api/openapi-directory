package openapisdk.models.operations;



public class ListPolicyPrincipalsResponse {
    public String contentType;
    public ListPolicyPrincipalsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListPolicyPrincipalsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListPolicyPrincipalsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListPolicyPrincipalsResponse listPolicyPrincipalsResponse;
    public ListPolicyPrincipalsResponse withListPolicyPrincipalsResponse(openapisdk.models.shared.ListPolicyPrincipalsResponse listPolicyPrincipalsResponse) {
        this.listPolicyPrincipalsResponse = listPolicyPrincipalsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListPolicyPrincipalsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListPolicyPrincipalsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListPolicyPrincipalsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListPolicyPrincipalsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public ListPolicyPrincipalsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}