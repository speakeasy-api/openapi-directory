package openapisdk.models.operations;



public class UpdateRelationalDatabaseParametersResponse {
    public Object accessDeniedException;
    public UpdateRelationalDatabaseParametersResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public UpdateRelationalDatabaseParametersResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public UpdateRelationalDatabaseParametersResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public UpdateRelationalDatabaseParametersResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public UpdateRelationalDatabaseParametersResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public UpdateRelationalDatabaseParametersResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public UpdateRelationalDatabaseParametersResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public UpdateRelationalDatabaseParametersResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public UpdateRelationalDatabaseParametersResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
    public openapisdk.models.shared.UpdateRelationalDatabaseParametersResult updateRelationalDatabaseParametersResult;
    public UpdateRelationalDatabaseParametersResponse withUpdateRelationalDatabaseParametersResult(openapisdk.models.shared.UpdateRelationalDatabaseParametersResult updateRelationalDatabaseParametersResult) {
        this.updateRelationalDatabaseParametersResult = updateRelationalDatabaseParametersResult;
        return this;
    }
}