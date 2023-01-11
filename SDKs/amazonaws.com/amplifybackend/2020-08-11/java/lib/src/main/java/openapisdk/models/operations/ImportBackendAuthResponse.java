package openapisdk.models.operations;



public class ImportBackendAuthResponse {
    public Object badRequestException;
    public ImportBackendAuthResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public ImportBackendAuthResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object gatewayTimeoutException;
    public ImportBackendAuthResponse withGatewayTimeoutException(Object gatewayTimeoutException) {
        this.gatewayTimeoutException = gatewayTimeoutException;
        return this;
    }
    public openapisdk.models.shared.ImportBackendAuthResponse importBackendAuthResponse;
    public ImportBackendAuthResponse withImportBackendAuthResponse(openapisdk.models.shared.ImportBackendAuthResponse importBackendAuthResponse) {
        this.importBackendAuthResponse = importBackendAuthResponse;
        return this;
    }
    public Object notFoundException;
    public ImportBackendAuthResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public ImportBackendAuthResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ImportBackendAuthResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}