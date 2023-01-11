package openapisdk.models.operations;



public class ListInfrastructureConfigurationsResponse {
    public Object callRateLimitExceededException;
    public ListInfrastructureConfigurationsResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public Object clientException;
    public ListInfrastructureConfigurationsResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public ListInfrastructureConfigurationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public ListInfrastructureConfigurationsResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object invalidPaginationTokenException;
    public ListInfrastructureConfigurationsResponse withInvalidPaginationTokenException(Object invalidPaginationTokenException) {
        this.invalidPaginationTokenException = invalidPaginationTokenException;
        return this;
    }
    public Object invalidRequestException;
    public ListInfrastructureConfigurationsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListInfrastructureConfigurationsResponse listInfrastructureConfigurationsResponse;
    public ListInfrastructureConfigurationsResponse withListInfrastructureConfigurationsResponse(openapisdk.models.shared.ListInfrastructureConfigurationsResponse listInfrastructureConfigurationsResponse) {
        this.listInfrastructureConfigurationsResponse = listInfrastructureConfigurationsResponse;
        return this;
    }
    public Object serviceException;
    public ListInfrastructureConfigurationsResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListInfrastructureConfigurationsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListInfrastructureConfigurationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}