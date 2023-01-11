package openapisdk.models.operations;



public class UpdateFunctionConfigurationResponse {
    public String contentType;
    public UpdateFunctionConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FunctionConfiguration functionConfiguration;
    public UpdateFunctionConfigurationResponse withFunctionConfiguration(openapisdk.models.shared.FunctionConfiguration functionConfiguration) {
        this.functionConfiguration = functionConfiguration;
        return this;
    }
    public openapisdk.models.shared.InvalidParameterValueException invalidParameterValueException;
    public UpdateFunctionConfigurationResponse withInvalidParameterValueException(openapisdk.models.shared.InvalidParameterValueException invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException;
    public UpdateFunctionConfigurationResponse withResourceNotFoundException(openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.ServiceException serviceException;
    public UpdateFunctionConfigurationResponse withServiceException(openapisdk.models.shared.ServiceException serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public UpdateFunctionConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}