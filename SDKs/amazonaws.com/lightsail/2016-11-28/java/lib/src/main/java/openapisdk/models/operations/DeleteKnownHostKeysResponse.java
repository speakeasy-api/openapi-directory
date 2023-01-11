package openapisdk.models.operations;



public class DeleteKnownHostKeysResponse {
    public Object accessDeniedException;
    public DeleteKnownHostKeysResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public DeleteKnownHostKeysResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public DeleteKnownHostKeysResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteKnownHostKeysResult deleteKnownHostKeysResult;
    public DeleteKnownHostKeysResponse withDeleteKnownHostKeysResult(openapisdk.models.shared.DeleteKnownHostKeysResult deleteKnownHostKeysResult) {
        this.deleteKnownHostKeysResult = deleteKnownHostKeysResult;
        return this;
    }
    public Object invalidInputException;
    public DeleteKnownHostKeysResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public DeleteKnownHostKeysResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public DeleteKnownHostKeysResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public DeleteKnownHostKeysResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DeleteKnownHostKeysResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public DeleteKnownHostKeysResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}