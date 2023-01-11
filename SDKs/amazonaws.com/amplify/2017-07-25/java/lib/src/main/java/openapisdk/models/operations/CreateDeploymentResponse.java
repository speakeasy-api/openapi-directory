package openapisdk.models.operations;



public class CreateDeploymentResponse {
    public Object badRequestException;
    public CreateDeploymentResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public CreateDeploymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDeploymentResult createDeploymentResult;
    public CreateDeploymentResponse withCreateDeploymentResult(openapisdk.models.shared.CreateDeploymentResult createDeploymentResult) {
        this.createDeploymentResult = createDeploymentResult;
        return this;
    }
    public Object internalFailureException;
    public CreateDeploymentResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public CreateDeploymentResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Long statusCode;
    public CreateDeploymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public CreateDeploymentResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}