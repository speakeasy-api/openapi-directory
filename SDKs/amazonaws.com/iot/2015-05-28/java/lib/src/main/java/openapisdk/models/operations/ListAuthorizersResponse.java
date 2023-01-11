package openapisdk.models.operations;



public class ListAuthorizersResponse {
    public String contentType;
    public ListAuthorizersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListAuthorizersResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListAuthorizersResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListAuthorizersResponse listAuthorizersResponse;
    public ListAuthorizersResponse withListAuthorizersResponse(openapisdk.models.shared.ListAuthorizersResponse listAuthorizersResponse) {
        this.listAuthorizersResponse = listAuthorizersResponse;
        return this;
    }
    public Object serviceUnavailableException;
    public ListAuthorizersResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListAuthorizersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListAuthorizersResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public ListAuthorizersResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}