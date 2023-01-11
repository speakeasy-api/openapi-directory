package openapisdk.models.operations;



public class UpdateDevicePolicyConfigurationResponse {
    public String contentType;
    public UpdateDevicePolicyConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerErrorException;
    public UpdateDevicePolicyConfigurationResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateDevicePolicyConfigurationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public UpdateDevicePolicyConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateDevicePolicyConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateDevicePolicyConfigurationResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object unauthorizedException;
    public UpdateDevicePolicyConfigurationResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    public java.util.Map<String, Object> updateDevicePolicyConfigurationResponse;
    public UpdateDevicePolicyConfigurationResponse withUpdateDevicePolicyConfigurationResponse(java.util.Map<String, Object> updateDevicePolicyConfigurationResponse) {
        this.updateDevicePolicyConfigurationResponse = updateDevicePolicyConfigurationResponse;
        return this;
    }
}