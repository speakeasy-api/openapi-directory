package openapisdk.models.operations;



public class ListDomainConfigurationsResponse {
    public String contentType;
    public ListDomainConfigurationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public ListDomainConfigurationsResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public ListDomainConfigurationsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListDomainConfigurationsResponse listDomainConfigurationsResponse;
    public ListDomainConfigurationsResponse withListDomainConfigurationsResponse(openapisdk.models.shared.ListDomainConfigurationsResponse listDomainConfigurationsResponse) {
        this.listDomainConfigurationsResponse = listDomainConfigurationsResponse;
        return this;
    }
    public Object serviceUnavailableException;
    public ListDomainConfigurationsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListDomainConfigurationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ListDomainConfigurationsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object unauthorizedException;
    public ListDomainConfigurationsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}