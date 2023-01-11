package openapisdk.models.operations;



public class DeleteRelationalDatabaseResponse {
    public Object accessDeniedException;
    public DeleteRelationalDatabaseResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public DeleteRelationalDatabaseResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public DeleteRelationalDatabaseResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteRelationalDatabaseResult deleteRelationalDatabaseResult;
    public DeleteRelationalDatabaseResponse withDeleteRelationalDatabaseResult(openapisdk.models.shared.DeleteRelationalDatabaseResult deleteRelationalDatabaseResult) {
        this.deleteRelationalDatabaseResult = deleteRelationalDatabaseResult;
        return this;
    }
    public Object invalidInputException;
    public DeleteRelationalDatabaseResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public DeleteRelationalDatabaseResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public DeleteRelationalDatabaseResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public DeleteRelationalDatabaseResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DeleteRelationalDatabaseResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public DeleteRelationalDatabaseResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}