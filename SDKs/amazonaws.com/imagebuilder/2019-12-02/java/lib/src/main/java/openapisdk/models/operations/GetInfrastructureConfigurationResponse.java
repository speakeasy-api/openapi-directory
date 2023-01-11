package openapisdk.models.operations;



public class GetInfrastructureConfigurationResponse {
    public Object callRateLimitExceededException;
    public GetInfrastructureConfigurationResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public Object clientException;
    public GetInfrastructureConfigurationResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public GetInfrastructureConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public GetInfrastructureConfigurationResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public openapisdk.models.shared.GetInfrastructureConfigurationResponse getInfrastructureConfigurationResponse;
    public GetInfrastructureConfigurationResponse withGetInfrastructureConfigurationResponse(openapisdk.models.shared.GetInfrastructureConfigurationResponse getInfrastructureConfigurationResponse) {
        this.getInfrastructureConfigurationResponse = getInfrastructureConfigurationResponse;
        return this;
    }
    public Object invalidRequestException;
    public GetInfrastructureConfigurationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object serviceException;
    public GetInfrastructureConfigurationResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceUnavailableException;
    public GetInfrastructureConfigurationResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public GetInfrastructureConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}