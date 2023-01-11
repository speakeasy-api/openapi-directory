package openapisdk.models.operations;



public class CreateDistributionConfigurationResponse {
    public Object callRateLimitExceededException;
    public CreateDistributionConfigurationResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public Object clientException;
    public CreateDistributionConfigurationResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public CreateDistributionConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDistributionConfigurationResponse createDistributionConfigurationResponse;
    public CreateDistributionConfigurationResponse withCreateDistributionConfigurationResponse(openapisdk.models.shared.CreateDistributionConfigurationResponse createDistributionConfigurationResponse) {
        this.createDistributionConfigurationResponse = createDistributionConfigurationResponse;
        return this;
    }
    public Object forbiddenException;
    public CreateDistributionConfigurationResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public CreateDistributionConfigurationResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object invalidParameterCombinationException;
    public CreateDistributionConfigurationResponse withInvalidParameterCombinationException(Object invalidParameterCombinationException) {
        this.invalidParameterCombinationException = invalidParameterCombinationException;
        return this;
    }
    public Object invalidRequestException;
    public CreateDistributionConfigurationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceAlreadyExistsException;
    public CreateDistributionConfigurationResponse withResourceAlreadyExistsException(Object resourceAlreadyExistsException) {
        this.resourceAlreadyExistsException = resourceAlreadyExistsException;
        return this;
    }
    public Object resourceInUseException;
    public CreateDistributionConfigurationResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object serviceException;
    public CreateDistributionConfigurationResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public CreateDistributionConfigurationResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Object serviceUnavailableException;
    public CreateDistributionConfigurationResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public CreateDistributionConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}