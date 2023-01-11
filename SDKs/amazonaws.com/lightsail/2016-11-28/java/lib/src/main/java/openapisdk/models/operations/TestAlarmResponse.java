package openapisdk.models.operations;



public class TestAlarmResponse {
    public Object accessDeniedException;
    public TestAlarmResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public TestAlarmResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public TestAlarmResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object notFoundException;
    public TestAlarmResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object operationFailureException;
    public TestAlarmResponse withOperationFailureException(Object operationFailureException) {
        this.operationFailureException = operationFailureException;
        return this;
    }
    public Object serviceException;
    public TestAlarmResponse withServiceException(Object serviceException) {
        this.serviceException = serviceException;
        return this;
    }
    public Long statusCode;
    public TestAlarmResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.TestAlarmResult testAlarmResult;
    public TestAlarmResponse withTestAlarmResult(openapisdk.models.shared.TestAlarmResult testAlarmResult) {
        this.testAlarmResult = testAlarmResult;
        return this;
    }
    public Object unauthenticatedException;
    public TestAlarmResponse withUnauthenticatedException(Object unauthenticatedException) {
        this.unauthenticatedException = unauthenticatedException;
        return this;
    }
}