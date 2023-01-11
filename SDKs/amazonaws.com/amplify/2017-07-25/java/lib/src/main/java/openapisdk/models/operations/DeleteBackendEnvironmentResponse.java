package openapisdk.models.operations;



public class DeleteBackendEnvironmentResponse {
    public Object badRequestException;
    public DeleteBackendEnvironmentResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DeleteBackendEnvironmentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteBackendEnvironmentResult deleteBackendEnvironmentResult;
    public DeleteBackendEnvironmentResponse withDeleteBackendEnvironmentResult(openapisdk.models.shared.DeleteBackendEnvironmentResult deleteBackendEnvironmentResult) {
        this.deleteBackendEnvironmentResult = deleteBackendEnvironmentResult;
        return this;
    }
    public Object dependentServiceFailureException;
    public DeleteBackendEnvironmentResponse withDependentServiceFailureException(Object dependentServiceFailureException) {
        this.dependentServiceFailureException = dependentServiceFailureException;
        return this;
    }
    public Object internalFailureException;
    public DeleteBackendEnvironmentResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object notFoundException;
    public DeleteBackendEnvironmentResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteBackendEnvironmentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DeleteBackendEnvironmentResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}