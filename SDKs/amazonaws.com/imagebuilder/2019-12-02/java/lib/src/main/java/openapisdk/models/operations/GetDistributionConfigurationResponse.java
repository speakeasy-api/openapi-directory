package openapisdk.models.operations;



public class GetDistributionConfigurationResponse {
    public Object callRateLimitExceededException;
    public GetDistributionConfigurationResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public Object clientException;
    public GetDistributionConfigurationResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public GetDistributionConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public GetDistributionConfigurationResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public openapisdk.models.shared.GetDistributionConfigurationResponse getDistributionConfigurationResponse;
    public GetDistributionConfigurationResponse withGetDistributionConfigurationResponse(openapisdk.models.shared.GetDistributionConfigurationResponse getDistributionConfigurationResponse) {
        this.getDistributionConfigurationResponse = getDistributionConfigurationResponse;
        return this;
    }
    public Object invalidRequestException;
    public GetDistributionConfigurationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object serviceException;
    public GetDistributionConfigurationResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetDistributionConfigurationResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetDistributionConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}