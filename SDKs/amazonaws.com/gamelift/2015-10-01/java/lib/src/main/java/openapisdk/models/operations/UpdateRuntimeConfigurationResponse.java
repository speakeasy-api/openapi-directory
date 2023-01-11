package openapisdk.models.operations;



public class UpdateRuntimeConfigurationResponse {
    public String contentType;
    public UpdateRuntimeConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public UpdateRuntimeConfigurationResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidFleetStatusException;
    public UpdateRuntimeConfigurationResponse withInvalidFleetStatusException(Object invalidFleetStatusException) {
        this.invalidFleetStatusException = invalidFleetStatusException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateRuntimeConfigurationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public UpdateRuntimeConfigurationResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateRuntimeConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public UpdateRuntimeConfigurationResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    public openapisdk.models.shared.UpdateRuntimeConfigurationOutput updateRuntimeConfigurationOutput;
    public UpdateRuntimeConfigurationResponse withUpdateRuntimeConfigurationOutput(openapisdk.models.shared.UpdateRuntimeConfigurationOutput updateRuntimeConfigurationOutput) {
        this.updateRuntimeConfigurationOutput = updateRuntimeConfigurationOutput;
        return this;
    }
}