package openapisdk.models.operations;



public class UpdateLoggingConfigurationResponse {
    public String contentType;
    public UpdateLoggingConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerError;
    public UpdateLoggingConfigurationResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object invalidRequestException;
    public UpdateLoggingConfigurationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object invalidTokenException;
    public UpdateLoggingConfigurationResponse withInvalidTokenException(Object invalidTokenException) {
        this.invalidTokenException = invalidTokenException;
        return this;
    }
    public Object logDestinationPermissionException;
    public UpdateLoggingConfigurationResponse withLogDestinationPermissionException(Object logDestinationPermissionException) {
        this.logDestinationPermissionException = logDestinationPermissionException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateLoggingConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateLoggingConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public UpdateLoggingConfigurationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public openapisdk.models.shared.UpdateLoggingConfigurationResponse updateLoggingConfigurationResponse;
    public UpdateLoggingConfigurationResponse withUpdateLoggingConfigurationResponse(openapisdk.models.shared.UpdateLoggingConfigurationResponse updateLoggingConfigurationResponse) {
        this.updateLoggingConfigurationResponse = updateLoggingConfigurationResponse;
        return this;
    }
}