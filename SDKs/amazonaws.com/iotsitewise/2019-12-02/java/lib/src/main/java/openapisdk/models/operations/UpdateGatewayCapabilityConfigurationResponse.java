package openapisdk.models.operations;



public class UpdateGatewayCapabilityConfigurationResponse {
    public Object conflictingOperationException;
    public UpdateGatewayCapabilityConfigurationResponse withConflictingOperationException(Object conflictingOperationException) {
        this.conflictingOperationException = conflictingOperationException;
        return this;
    }
    public String contentType;
    public UpdateGatewayCapabilityConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public UpdateGatewayCapabilityConfigurationResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateGatewayCapabilityConfigurationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public UpdateGatewayCapabilityConfigurationResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateGatewayCapabilityConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateGatewayCapabilityConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateGatewayCapabilityConfigurationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateGatewayCapabilityConfigurationResponse updateGatewayCapabilityConfigurationResponse;
    public UpdateGatewayCapabilityConfigurationResponse withUpdateGatewayCapabilityConfigurationResponse(openapisdk.models.shared.UpdateGatewayCapabilityConfigurationResponse updateGatewayCapabilityConfigurationResponse) {
        this.updateGatewayCapabilityConfigurationResponse = updateGatewayCapabilityConfigurationResponse;
        return this;
    }
}