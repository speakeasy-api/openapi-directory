package openapisdk.models.operations;



public class AssociateHealthCheckResponse {
    public java.util.Map<String, Object> associateHealthCheckResponse;
    public AssociateHealthCheckResponse withAssociateHealthCheckResponse(java.util.Map<String, Object> associateHealthCheckResponse) {
        this.associateHealthCheckResponse = associateHealthCheckResponse;
        return this;
    }
    public String contentType;
    public AssociateHealthCheckResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalErrorException;
    public AssociateHealthCheckResponse withInternalErrorException(Object internalErrorException) {
        this.internalErrorException = internalErrorException;
        return this;
    }
    public Object invalidParameterException;
    public AssociateHealthCheckResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public Object limitsExceededException;
    public AssociateHealthCheckResponse withLimitsExceededException(Object limitsExceededException) {
        this.limitsExceededException = limitsExceededException;
        return this;
    }
    public Object optimisticLockException;
    public AssociateHealthCheckResponse withOptimisticLockException(Object optimisticLockException) {
        this.optimisticLockException = optimisticLockException;
        return this;
    }
    public Object resourceNotFoundException;
    public AssociateHealthCheckResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public AssociateHealthCheckResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}