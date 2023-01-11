package openapisdk.models.operations;



public class ListDistributionConfigurationsResponse {
    public Object callRateLimitExceededException;
    public ListDistributionConfigurationsResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public Object clientException;
    public ListDistributionConfigurationsResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public ListDistributionConfigurationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public ListDistributionConfigurationsResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object invalidPaginationTokenException;
    public ListDistributionConfigurationsResponse withInvalidPaginationTokenException(Object invalidPaginationTokenException) {
        this.invalidPaginationTokenException = invalidPaginationTokenException;
        return this;
    }
    public Object invalidRequestException;
    public ListDistributionConfigurationsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public openapisdk.models.shared.ListDistributionConfigurationsResponse listDistributionConfigurationsResponse;
    public ListDistributionConfigurationsResponse withListDistributionConfigurationsResponse(openapisdk.models.shared.ListDistributionConfigurationsResponse listDistributionConfigurationsResponse) {
        this.listDistributionConfigurationsResponse = listDistributionConfigurationsResponse;
        return this;
    }
    public Object serviceException;
    public ListDistributionConfigurationsResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceUnavailableException;
    public ListDistributionConfigurationsResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public ListDistributionConfigurationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}