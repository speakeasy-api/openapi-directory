package openapisdk.models.operations;



public class GetBackendEnvironmentResponse {
    public Object badRequestException;
    public GetBackendEnvironmentResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public GetBackendEnvironmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetBackendEnvironmentResult getBackendEnvironmentResult;
    public GetBackendEnvironmentResponse withGetBackendEnvironmentResult(openapisdk.models.shared.GetBackendEnvironmentResult getBackendEnvironmentResult) {
        this.getBackendEnvironmentResult = getBackendEnvironmentResult;
        return this;
    }
    public Object internalFailureException;
    public GetBackendEnvironmentResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object notFoundException;
    public GetBackendEnvironmentResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetBackendEnvironmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public GetBackendEnvironmentResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}