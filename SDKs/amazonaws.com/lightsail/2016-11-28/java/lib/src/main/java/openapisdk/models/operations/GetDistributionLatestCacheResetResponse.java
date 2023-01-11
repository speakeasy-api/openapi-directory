package openapisdk.models.operations;



public class GetDistributionLatestCacheResetResponse {
    public Object accessDeniedException;
    public GetDistributionLatestCacheResetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetDistributionLatestCacheResetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDistributionLatestCacheResetResult getDistributionLatestCacheResetResult;
    public GetDistributionLatestCacheResetResponse withGetDistributionLatestCacheResetResult(openapisdk.models.shared.GetDistributionLatestCacheResetResult getDistributionLatestCacheResetResult) {
        this.getDistributionLatestCacheResetResult = getDistributionLatestCacheResetResult;
        return this;
    }
    public Object invalidInputException;
    public GetDistributionLatestCacheResetResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public GetDistributionLatestCacheResetResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public GetDistributionLatestCacheResetResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public GetDistributionLatestCacheResetResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetDistributionLatestCacheResetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public GetDistributionLatestCacheResetResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}