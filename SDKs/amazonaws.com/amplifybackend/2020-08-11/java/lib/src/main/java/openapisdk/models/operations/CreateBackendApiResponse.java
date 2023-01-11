package openapisdk.models.operations;



public class CreateBackendApiResponse {
    public Object badRequestException;
    public CreateBackendApiResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateBackendApiResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateBackendApiResponse createBackendAPIResponse;
    public CreateBackendApiResponse withCreateBackendApiResponse(openapisdk.models.shared.CreateBackendApiResponse createBackendAPIResponse) {
        this.createBackendAPIResponse = createBackendAPIResponse;
        return this;
    }
    public Object gatewayTimeoutException;
    public CreateBackendApiResponse withGatewayTimeoutException(Object gatewayTimeoutException) {
        this.gatewayTimeoutException = gatewayTimeoutException;
        return this;
    }
    public Object notFoundException;
    public CreateBackendApiResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateBackendApiResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateBackendApiResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}