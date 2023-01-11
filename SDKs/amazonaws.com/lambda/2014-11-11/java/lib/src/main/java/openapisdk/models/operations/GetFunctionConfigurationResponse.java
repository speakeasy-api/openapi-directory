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
    public openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException;
    public GetFunctionConfigurationResponse withResourceNotFoundException(openapisdk.models.shared.ResourceNotFoundException resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public openapisdk.models.shared.ServiceException serviceException;
    public GetFunctionConfigurationResponse withServiceException(openapisdk.models.shared.ServiceException serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetFunctionConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}