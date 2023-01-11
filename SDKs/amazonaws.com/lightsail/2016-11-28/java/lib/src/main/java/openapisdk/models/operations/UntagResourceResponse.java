package openapisdk.models.operations;



public class UntagResourceResponse {
    public Object accessDeniedException;
    public UntagResourceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public UntagResourceResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public UntagResourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public UntagResourceResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public UntagResourceResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public UntagResourceResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public UntagResourceResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public UntagResourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public UntagResourceResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
    public openapisdk.models.shared.UntagResourceResult untagResourceResult;
    public UntagResourceResponse withUntagResourceResult(openapisdk.models.shared.UntagResourceResult untagResourceResult) {
        this.untagResourceResult = untagResourceResult;
        return this;
    }
}