package openapisdk.models.operations;



public class GetFunctionConfigurationResponse {
    public String contentType;
    public GetFunctionConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.FunctionConfiguration functionConfiguration;
    public GetFunctionConfigurationResponse withFunctionConfiguration(openapisdk.models.shared.FunctionConfiguration functionConfiguration) {
        this.functionConfiguration = functionConfiguration;
        return this;
    }
    public Object invalidParameterValueException;
    public GetFunctionConfigurationResponse withInvalidParameterValueException(Object invalidParameterValueException) {
        this.invalidParameterValueException = invalidParameterValueException;
        return this;
    }
    public Object resourceNotFoundException;
    public GetFunctionConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceException;
    public GetFunctionConfigurationResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetFunctionConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetFunctionConfigurationResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}