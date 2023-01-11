package openapisdk.models.operations;



public class UpdateBackendJobResponse {
    public Object badRequestException;
    public UpdateBackendJobResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public UpdateBackendJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object gatewayTimeoutException;
    public UpdateBackendJobResponse withGatewayTimeoutException(Object gatewayTimeoutException) {
        this.gatewayTimeoutException = gatewayTimeoutException;
        return this;
    }
    public Object notFoundException;
    public UpdateBackendJobResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateBackendJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateBackendJobResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public openapisdk.models.shared.UpdateBackendJobResponse updateBackendJobResponse;
    public UpdateBackendJobResponse withUpdateBackendJobResponse(openapisdk.models.shared.UpdateBackendJobResponse updateBackendJobResponse) {
        this.updateBackendJobResponse = updateBackendJobResponse;
        return this;
    }
}