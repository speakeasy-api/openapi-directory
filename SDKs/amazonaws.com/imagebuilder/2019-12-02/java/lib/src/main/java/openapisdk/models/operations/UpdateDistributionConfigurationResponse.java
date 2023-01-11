package openapisdk.models.operations;



public class UpdateDistributionConfigurationResponse {
    public Object callRateLimitExceededException;
    public UpdateDistributionConfigurationResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public Object clientException;
    public UpdateDistributionConfigurationResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public UpdateDistributionConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public UpdateDistributionConfigurationResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public UpdateDistributionConfigurationResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object invalidParameterCombinationException;
    public UpdateDistributionConfigurationResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateDistributionConfigurationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceInUseException;
    public UpdateDistributionConfigurationResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object serviceException;
    public UpdateDistributionConfigurationResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceUnavailableException;
    public UpdateDistributionConfigurationResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public UpdateDistributionConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateDistributionConfigurationResponse updateDistributionConfigurationResponse;
    public UpdateDistributionConfigurationResponse withUpdateDistributionConfigurationResponse(openapisdk.models.shared.UpdateDistributionConfigurationResponse updateDistributionConfigurationResponse) {
        this.updateDistributionConfigurationResponse = updateDistributionConfigurationResponse;
        return this;
    }
}