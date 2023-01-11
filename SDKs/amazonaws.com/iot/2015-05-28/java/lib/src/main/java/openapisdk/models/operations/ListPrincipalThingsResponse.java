package openapisdk.models.operations;



public class ListPrincipalThingsResponse {
    public String contentType;
    public ListPrincipalThingsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListPrincipalThingsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListPrincipalThingsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListPrincipalThingsResponse listPrincipalThingsResponse;
    public ListPrincipalThingsResponse withListPrincipalThingsResponse(openapisdk.models.shared.ListPrincipalThingsResponse listPrincipalThingsResponse) {
        this.listPrincipalThingsResponse = listPrincipalThingsResponse;
        return this;
    }
    public Object resourceNotFoundException;
    public ListPrincipalThingsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListPrincipalThingsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListPrincipalThingsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListPrincipalThingsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public ListPrincipalThingsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}