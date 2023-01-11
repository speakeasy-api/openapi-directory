package openapisdk.models.operations;



public class DeleteBackendApiResponse {
    public Object badRequestException;
    public DeleteBackendApiResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteBackendApiResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteBackendApiResponse deleteBackendAPIResponse;
    public DeleteBackendApiResponse withDeleteBackendApiResponse(openapisdk.models.shared.DeleteBackendApiResponse deleteBackendAPIResponse) {
        this.deleteBackendAPIResponse = deleteBackendAPIResponse;
        return this;
    }
    public Object gatewayTimeoutException;
    public DeleteBackendApiResponse withGatewayTimeoutException(Object gatewayTimeoutException) {
        this.gatewayTimeoutException = gatewayTimeoutException;
        return this;
    }
    public Object notFoundException;
    public DeleteBackendApiResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteBackendApiResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteBackendApiResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}