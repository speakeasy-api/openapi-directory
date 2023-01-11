package openapisdk.models.operations;



public class CreateBackendEnvironmentResponse {
    public Object badRequestException;
    public CreateBackendEnvironmentResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateBackendEnvironmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateBackendEnvironmentResult createBackendEnvironmentResult;
    public CreateBackendEnvironmentResponse withCreateBackendEnvironmentResult(openapisdk.models.shared.CreateBackendEnvironmentResult createBackendEnvironmentResult) {
        this.createBackendEnvironmentResult = createBackendEnvironmentResult;
        return this;
    }
    public Object internalFailureException;
    public CreateBackendEnvironmentResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public CreateBackendEnvironmentResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public CreateBackendEnvironmentResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateBackendEnvironmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public CreateBackendEnvironmentResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}