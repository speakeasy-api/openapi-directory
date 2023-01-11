package openapisdk.models.operations;



public class DownloadDefaultKeyPairResponse {
    public Object accessDeniedException;
    public DownloadDefaultKeyPairResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public DownloadDefaultKeyPairResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public DownloadDefaultKeyPairResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DownloadDefaultKeyPairResult downloadDefaultKeyPairResult;
    public DownloadDefaultKeyPairResponse withDownloadDefaultKeyPairResult(openapisdk.models.shared.DownloadDefaultKeyPairResult downloadDefaultKeyPairResult) {
        this.downloadDefaultKeyPairResult = downloadDefaultKeyPairResult;
        return this;
    }
    public Object invalidInputException;
    public DownloadDefaultKeyPairResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public DownloadDefaultKeyPairResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public DownloadDefaultKeyPairResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public DownloadDefaultKeyPairResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DownloadDefaultKeyPairResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public DownloadDefaultKeyPairResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}