package openapisdk.models.operations;



public class UpdateDeploymentResponse {
    public Object badRequestException;
    public UpdateDeploymentResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public UpdateDeploymentResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public UpdateDeploymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object notFoundException;
    public UpdateDeploymentResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateDeploymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public UpdateDeploymentResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public openapisdk.models.shared.UpdateDeploymentResponse updateDeploymentResponse;
    public UpdateDeploymentResponse withUpdateDeploymentResponse(openapisdk.models.shared.UpdateDeploymentResponse updateDeploymentResponse) {
        this.updateDeploymentResponse = updateDeploymentResponse;
        return this;
    }
}