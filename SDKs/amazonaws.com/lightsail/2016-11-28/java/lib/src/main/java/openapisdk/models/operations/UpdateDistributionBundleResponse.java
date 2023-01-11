package openapisdk.models.operations;



public class UpdateDistributionBundleResponse {
    public Object accessDeniedException;
    public UpdateDistributionBundleResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public UpdateDistributionBundleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public UpdateDistributionBundleResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public UpdateDistributionBundleResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public UpdateDistributionBundleResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public UpdateDistributionBundleResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public UpdateDistributionBundleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public UpdateDistributionBundleResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
    public openapisdk.models.shared.UpdateDistributionBundleResult updateDistributionBundleResult;
    public UpdateDistributionBundleResponse withUpdateDistributionBundleResult(openapisdk.models.shared.UpdateDistributionBundleResult updateDistributionBundleResult) {
        this.updateDistributionBundleResult = updateDistributionBundleResult;
        return this;
    }
}