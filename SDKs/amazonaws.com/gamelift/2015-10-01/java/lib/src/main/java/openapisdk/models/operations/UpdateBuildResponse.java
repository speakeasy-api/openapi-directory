package openapisdk.models.operations;



public class UpdateBuildResponse {
    public String contentType;
    public UpdateBuildResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public UpdateBuildResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateBuildResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public UpdateBuildResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateBuildResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public UpdateBuildResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    public openapisdk.models.shared.UpdateBuildOutput updateBuildOutput;
    public UpdateBuildResponse withUpdateBuildOutput(openapisdk.models.shared.UpdateBuildOutput updateBuildOutput) {
        this.updateBuildOutput = updateBuildOutput;
        return this;
    }
}