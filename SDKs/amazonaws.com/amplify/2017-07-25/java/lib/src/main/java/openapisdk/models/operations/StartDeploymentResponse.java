package openapisdk.models.operations;



public class StartDeploymentResponse {
    public Object badRequestException;
    public StartDeploymentResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public StartDeploymentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public StartDeploymentResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object limitExceededException;
    public StartDeploymentResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object notFoundException;
    public StartDeploymentResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public openapisdk.models.shared.StartDeploymentResult startDeploymentResult;
    public StartDeploymentResponse withStartDeploymentResult(openapisdk.models.shared.StartDeploymentResult startDeploymentResult) {
        this.startDeploymentResult = startDeploymentResult;
        return this;
    }
    public Long statusCode;
    public StartDeploymentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public StartDeploymentResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}