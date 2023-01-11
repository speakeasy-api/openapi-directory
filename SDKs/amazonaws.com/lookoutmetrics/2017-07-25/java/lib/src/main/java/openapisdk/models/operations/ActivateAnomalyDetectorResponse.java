package openapisdk.models.operations;



public class ActivateAnomalyDetectorResponse {
    public Object accessDeniedException;
    public ActivateAnomalyDetectorResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public java.util.Map<String, Object> activateAnomalyDetectorResponse;
    public ActivateAnomalyDetectorResponse withActivateAnomalyDetectorResponse(java.util.Map<String, Object> activateAnomalyDetectorResponse) {
        this.activateAnomalyDetectorResponse = activateAnomalyDetectorResponse;
        return this;
    }
    public Object conflictException;
    public ActivateAnomalyDetectorResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public ActivateAnomalyDetectorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public ActivateAnomalyDetectorResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public ActivateAnomalyDetectorResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public ActivateAnomalyDetectorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public ActivateAnomalyDetectorResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object validationException;
    public ActivateAnomalyDetectorResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}