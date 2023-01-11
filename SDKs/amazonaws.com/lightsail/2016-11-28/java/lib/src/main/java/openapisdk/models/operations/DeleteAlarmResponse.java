package openapisdk.models.operations;



public class DeleteAlarmResponse {
    public Object accessDeniedException;
    public DeleteAlarmResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DeleteAlarmResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteAlarmResult deleteAlarmResult;
    public DeleteAlarmResponse withDeleteAlarmResult(openapisdk.models.shared.DeleteAlarmResult deleteAlarmResult) {
        this.deleteAlarmResult = deleteAlarmResult;
        return this;
    }
    public Object invalidInputException;
    public DeleteAlarmResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public DeleteAlarmResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public DeleteAlarmResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public DeleteAlarmResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public DeleteAlarmResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public DeleteAlarmResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}