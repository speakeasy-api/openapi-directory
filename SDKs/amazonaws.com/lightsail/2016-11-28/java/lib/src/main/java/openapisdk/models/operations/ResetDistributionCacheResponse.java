package openapisdk.models.operations;



public class ResetDistributionCacheResponse {
    public Object accessDeniedException;
    public ResetDistributionCacheResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public ResetDistributionCacheResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public ResetDistributionCacheResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public ResetDistributionCacheResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public ResetDistributionCacheResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public openapisdk.models.shared.ResetDistributionCacheResult resetDistributionCacheResult;
    public ResetDistributionCacheResponse withResetDistributionCacheResult(openapisdk.models.shared.ResetDistributionCacheResult resetDistributionCacheResult) {
        this.resetDistributionCacheResult = resetDistributionCacheResult;
        return this;
    }
    public Object serviceException;
    public ResetDistributionCacheResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public ResetDistributionCacheResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public ResetDistributionCacheResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}