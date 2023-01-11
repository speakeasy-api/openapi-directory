package openapisdk.models.operations;



public class BackTestAnomalyDetectorResponse {
    public Object accessDeniedException;
    public BackTestAnomalyDetectorResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public java.util.Map<String, Object> backTestAnomalyDetectorResponse;
    public BackTestAnomalyDetectorResponse withBackTestAnomalyDetectorResponse(java.util.Map<String, Object> backTestAnomalyDetectorResponse) {
        this.backTestAnomalyDetectorResponse = backTestAnomalyDetectorResponse;
        return this;
    }
    public String contentType;
    public BackTestAnomalyDetectorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public BackTestAnomalyDetectorResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public BackTestAnomalyDetectorResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public BackTestAnomalyDetectorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public BackTestAnomalyDetectorResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object validationException;
    public BackTestAnomalyDetectorResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}