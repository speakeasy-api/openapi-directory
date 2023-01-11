package openapisdk.models.operations;



public class PutAlarmResponse {
    public Object accessDeniedException;
    public PutAlarmResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public PutAlarmResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public PutAlarmResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public PutAlarmResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public PutAlarmResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public openapisdk.models.shared.PutAlarmResult putAlarmResult;
    public PutAlarmResponse withPutAlarmResult(openapisdk.models.shared.PutAlarmResult putAlarmResult) {
        this.putAlarmResult = putAlarmResult;
        return this;
    }
    public Object serviceException;
    public PutAlarmResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public PutAlarmResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthenticatedException;
    public PutAlarmResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}