package openapisdk.models.operations;



public class DeleteKeyPairResponse {
    public Object accessDeniedException;
    public DeleteKeyPairResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public DeleteKeyPairResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public DeleteKeyPairResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteKeyPairResult deleteKeyPairResult;
    public DeleteKeyPairResponse withDeleteKeyPairResult(openapisdk.models.shared.DeleteKeyPairResult deleteKeyPairResult) {
        this.deleteKeyPairResult = deleteKeyPairResult;
        return this;
    }
    public Object invalidInputException;
    public DeleteKeyPairResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public DeleteKeyPairResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public DeleteKeyPairResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public DeleteKeyPairResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DeleteKeyPairResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public DeleteKeyPairResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}