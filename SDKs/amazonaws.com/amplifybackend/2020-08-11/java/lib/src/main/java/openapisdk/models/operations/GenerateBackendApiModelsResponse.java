package openapisdk.models.operations;



public class GenerateBackendApiModelsResponse {
    public Object badRequestException;
    public GenerateBackendApiModelsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GenerateBackendApiModelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object gatewayTimeoutException;
    public GenerateBackendApiModelsResponse withGatewayTimeoutException(Object gatewayTimeoutException) {
        this.gatewayTimeoutException = gatewayTimeoutException;
        return this;
    }
    public openapisdk.models.shared.GenerateBackendApiModelsResponse generateBackendAPIModelsResponse;
    public GenerateBackendApiModelsResponse withGenerateBackendApiModelsResponse(openapisdk.models.shared.GenerateBackendApiModelsResponse generateBackendAPIModelsResponse) {
        this.generateBackendAPIModelsResponse = generateBackendAPIModelsResponse;
        return this;
    }
    public Object notFoundException;
    public GenerateBackendApiModelsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GenerateBackendApiModelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GenerateBackendApiModelsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}