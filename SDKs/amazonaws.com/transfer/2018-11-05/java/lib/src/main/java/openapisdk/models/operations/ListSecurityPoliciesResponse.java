package openapisdk.models.operations;



public class ListSecurityPoliciesResponse {
    public String contentType;
    public ListSecurityPoliciesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceError;
    public ListSecurityPoliciesResponse withInternalServiceError(Object internalServiceError) {
        this.internalServiceError = internalServiceError;
        return this;
    }
    public Object invalidNextTokenException;
    public ListSecurityPoliciesResponse withInvalidNextTokenException(Object invalidNextTokenException) {
        this.invalidNextTokenException = invalidNextTokenException;
        return this;
    }
    public Object invalidRequestException;
    public ListSecurityPoliciesResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListSecurityPoliciesResponse listSecurityPoliciesResponse;
    public ListSecurityPoliciesResponse withListSecurityPoliciesResponse(openapisdk.models.shared.ListSecurityPoliciesResponse listSecurityPoliciesResponse) {
        this.listSecurityPoliciesResponse = listSecurityPoliciesResponse;
        return this;
    }
    public Object serviceUnavailableException;
    public ListSecurityPoliciesResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListSecurityPoliciesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}