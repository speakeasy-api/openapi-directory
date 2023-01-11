package openapisdk.models.operations;



public class GetRelationalDatabaseMasterUserPasswordResponse {
    public Object accessDeniedException;
    public GetRelationalDatabaseMasterUserPasswordResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public GetRelationalDatabaseMasterUserPasswordResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public GetRelationalDatabaseMasterUserPasswordResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRelationalDatabaseMasterUserPasswordResult getRelationalDatabaseMasterUserPasswordResult;
    public GetRelationalDatabaseMasterUserPasswordResponse withGetRelationalDatabaseMasterUserPasswordResult(openapisdk.models.shared.GetRelationalDatabaseMasterUserPasswordResult getRelationalDatabaseMasterUserPasswordResult) {
        this.getRelationalDatabaseMasterUserPasswordResult = getRelationalDatabaseMasterUserPasswordResult;
        return this;
    }
    public Object invalidInputException;
    public GetRelationalDatabaseMasterUserPasswordResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public GetRelationalDatabaseMasterUserPasswordResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public GetRelationalDatabaseMasterUserPasswordResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public GetRelationalDatabaseMasterUserPasswordResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetRelationalDatabaseMasterUserPasswordResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public GetRelationalDatabaseMasterUserPasswordResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}