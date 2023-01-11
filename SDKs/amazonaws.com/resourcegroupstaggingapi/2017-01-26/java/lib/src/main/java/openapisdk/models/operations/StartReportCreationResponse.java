package openapisdk.models.operations;



public class StartReportCreationResponse {
    public Object concurrentModificationException;
    public StartReportCreationResponse withConcurrentModificationException(Object concurrentModificationException) {
        this.concurrentModificationException = concurrentModificationException;
        return this;
    }
    public Object constraintViolationException;
    public StartReportCreationResponse withConstraintViolationException(Object constraintViolationException) {
        this.constraintViolationException = constraintViolationException;
        return this;
    }
    public String contentType;
    public StartReportCreationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public StartReportCreationResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidParameterException;
    public StartReportCreationResponse withInvalidParameterException(Object invalidParameterException) {
        this.invalidParameterException = invalidParameterException;
        return this;
    }
    public java.util.Map<String, Object> startReportCreationOutput;
    public StartReportCreationResponse withStartReportCreationOutput(java.util.Map<String, Object> startReportCreationOutput) {
        this.startReportCreationOutput = startReportCreationOutput;
        return this;
    }
    public Long statusCode;
    public StartReportCreationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttledException;
    public StartReportCreationResponse withThrottledException(Object throttledException) {
        this.throttledException = throttledException;
        return this;
    }
}