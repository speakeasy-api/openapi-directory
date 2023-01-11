package openapisdk.models.operations;



public class CreateDeploymentJobResponse {
    public Object concurrentDeploymentException;
    public CreateDeploymentJobResponse withConcurrentDeploymentException(Object concurrentDeploymentException) {
        this.concurrentDeploymentException = concurrentDeploymentException;
        return this;
    }
    public String contentType;
    public CreateDeploymentJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.CreateDeploymentJobResponse createDeploymentJobResponse;
    public CreateDeploymentJobResponse withCreateDeploymentJobResponse(openapisdk.models.shared.CreateDeploymentJobResponse createDeploymentJobResponse) {
        this.createDeploymentJobResponse = createDeploymentJobResponse;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public CreateDeploymentJobResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object internalServerException;
    public CreateDeploymentJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public CreateDeploymentJobResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object limitExceededException;
    public CreateDeploymentJobResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public CreateDeploymentJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public CreateDeploymentJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public CreateDeploymentJobResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}