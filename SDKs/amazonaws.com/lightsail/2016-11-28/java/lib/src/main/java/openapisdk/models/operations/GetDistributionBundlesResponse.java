package openapisdk.models.operations;



public class GetDistributionBundlesResponse {
    public Object accessDeniedException;
    public GetDistributionBundlesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public GetDistributionBundlesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetDistributionBundlesResult getDistributionBundlesResult;
    public GetDistributionBundlesResponse withGetDistributionBundlesResult(openapisdk.models.shared.GetDistributionBundlesResult getDistributionBundlesResult) {
        this.getDistributionBundlesResult = getDistributionBundlesResult;
        return this;
    }
    public Object invalidInputException;
    public GetDistributionBundlesResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public GetDistributionBundlesResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public GetDistributionBundlesResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public GetDistributionBundlesResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetDistributionBundlesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public GetDistributionBundlesResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}