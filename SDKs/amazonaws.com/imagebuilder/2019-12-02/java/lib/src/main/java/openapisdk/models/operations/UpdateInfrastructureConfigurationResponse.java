package openapisdk.models.operations;



public class UpdateInfrastructureConfigurationResponse {
    public Object callRateLimitExceededException;
    public UpdateInfrastructureConfigurationResponse withCallRateLimitExceededException(Object callRateLimitExceededException) {
        this.callRateLimitExceededException = callRateLimitExceededException;
        return this;
    }
    public Object clientException;
    public UpdateInfrastructureConfigurationResponse withClientException(Object clientException) {
        this.clientException = clientException;
        return this;
    }
    public String contentType;
    public UpdateInfrastructureConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object forbiddenException;
    public UpdateInfrastructureConfigurationResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public UpdateInfrastructureConfigurationResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateInfrastructureConfigurationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceInUseException;
    public UpdateInfrastructureConfigurationResponse withResourceInUseException(Object resourceInUseException) {
        this.resourceInUseException = resourceInUseException;
        return this;
    }
    public Object serviceException;
    public UpdateInfrastructureConfigurationResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Object serviceUnavailableException;
    public UpdateInfrastructureConfigurationResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public UpdateInfrastructureConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateInfrastructureConfigurationResponse updateInfrastructureConfigurationResponse;
    public UpdateInfrastructureConfigurationResponse withUpdateInfrastructureConfigurationResponse(openapisdk.models.shared.UpdateInfrastructureConfigurationResponse updateInfrastructureConfigurationResponse) {
        this.updateInfrastructureConfigurationResponse = updateInfrastructureConfigurationResponse;
        return this;
    }
}