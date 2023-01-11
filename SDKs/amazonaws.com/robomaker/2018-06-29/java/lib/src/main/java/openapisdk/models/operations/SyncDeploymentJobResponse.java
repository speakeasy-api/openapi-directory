package openapisdk.models.operations;



public class SyncDeploymentJobResponse {
    public Object concurrentDeploymentException;
    public SyncDeploymentJobResponse withConcurrentDeploymentException(Object concurrentDeploymentException) {
        this.concurrentDeploymentException = concurrentDeploymentException;
        return this;
    }
    public String contentType;
    public SyncDeploymentJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object idempotentParameterMismatchException;
    public SyncDeploymentJobResponse withIdempotentParameterMismatchException(Object idempotentParameterMismatchException) {
        this.idempotentParameterMismatchException = idempotentParameterMismatchException;
        return this;
    }
    public Object internalServerException;
    public SyncDeploymentJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidParameterException;
    public SyncDeploymentJobResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object limitExceededException;
    public SyncDeploymentJobResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public SyncDeploymentJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public SyncDeploymentJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SyncDeploymentJobResponse syncDeploymentJobResponse;
    public SyncDeploymentJobResponse withSyncDeploymentJobResponse(openapisdk.models.shared.SyncDeploymentJobResponse syncDeploymentJobResponse) {
        this.syncDeploymentJobResponse = syncDeploymentJobResponse;
        return this;
    }
    public Object throttlingException;
    public SyncDeploymentJobResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}