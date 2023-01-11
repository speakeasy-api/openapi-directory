package openapisdk.models.operations;



public class GetRelationalDatabaseMetricDataResponse {
    public Object accessDeniedException;
    public GetRelationalDatabaseMetricDataResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object accountSetupInProgressException;
    public GetRelationalDatabaseMetricDataResponse withAccountSetupInProgressException(Object accountSetupInProgressException) {
        this.accountSetupInProgressException = accountSetupInProgressException;
        return this;
    }
    public String contentType;
    public GetRelationalDatabaseMetricDataResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetRelationalDatabaseMetricDataResult getRelationalDatabaseMetricDataResult;
    public GetRelationalDatabaseMetricDataResponse withGetRelationalDatabaseMetricDataResult(openapisdk.models.shared.GetRelationalDatabaseMetricDataResult getRelationalDatabaseMetricDataResult) {
        this.getRelationalDatabaseMetricDataResult = getRelationalDatabaseMetricDataResult;
        return this;
    }
    public Object invalidInputException;
    public GetRelationalDatabaseMetricDataResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public GetRelationalDatabaseMetricDataResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public GetRelationalDatabaseMetricDataResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public GetRelationalDatabaseMetricDataResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public GetRelationalDatabaseMetricDataResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public GetRelationalDatabaseMetricDataResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}