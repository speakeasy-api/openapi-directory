package openapisdk.models.operations;



public class GetBackendApiModelsResponse {
    public Object badRequestException;
    public GetBackendApiModelsResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetBackendApiModelsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object gatewayTimeoutException;
    public GetBackendApiModelsResponse withGatewayTimeoutException(Object gatewayTimeoutException) {
        this.gatewayTimeoutException = gatewayTimeoutException;
        return this;
    }
    public openapisdk.models.shared.GetBackendApiModelsResponse getBackendAPIModelsResponse;
    public GetBackendApiModelsResponse withGetBackendApiModelsResponse(openapisdk.models.shared.GetBackendApiModelsResponse getBackendAPIModelsResponse) {
        this.getBackendAPIModelsResponse = getBackendAPIModelsResponse;
        return this;
    }
    public Object notFoundException;
    public GetBackendApiModelsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetBackendApiModelsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public GetBackendApiModelsResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}