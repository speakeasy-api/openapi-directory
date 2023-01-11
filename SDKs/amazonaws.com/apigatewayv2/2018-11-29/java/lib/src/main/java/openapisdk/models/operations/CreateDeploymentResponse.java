package openapisdk.models.operations;



public class CreateDeploymentResponse {
    public Object badRequestException;
    public CreateDeploymentResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public Object conflictException;
    public CreateDeploymentResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public CreateDeploymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDeploymentResponse createDeploymentResponse;
    public CreateDeploymentResponse withCreateDeploymentResponse(openapisdk.models.shared.CreateDeploymentResponse createDeploymentResponse) {
        this.createDeploymentResponse = createDeploymentResponse;
        return this;
    }
    public Object notFoundException;
    public CreateDeploymentResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public CreateDeploymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public CreateDeploymentResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}