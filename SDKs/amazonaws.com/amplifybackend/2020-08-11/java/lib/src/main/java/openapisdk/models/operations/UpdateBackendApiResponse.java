package openapisdk.models.operations;



public class UpdateBackendApiResponse {
    public Object badRequestException;
    public UpdateBackendApiResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public UpdateBackendApiResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object gatewayTimeoutException;
    public UpdateBackendApiResponse withGatewayTimeoutException(Object gatewayTimeoutException) {
        this.gatewayTimeoutException = gatewayTimeoutException;
        return this;
    }
    public Object notFoundException;
    public UpdateBackendApiResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateBackendApiResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateBackendApiResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public openapisdk.models.shared.UpdateBackendApiResponse updateBackendAPIResponse;
    public UpdateBackendApiResponse withUpdateBackendApiResponse(openapisdk.models.shared.UpdateBackendApiResponse updateBackendAPIResponse) {
        this.updateBackendAPIResponse = updateBackendAPIResponse;
        return this;
    }
}