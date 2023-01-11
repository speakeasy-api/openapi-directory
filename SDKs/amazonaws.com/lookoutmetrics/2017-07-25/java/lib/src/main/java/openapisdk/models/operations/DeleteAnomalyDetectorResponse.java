package openapisdk.models.operations;



public class DeleteAnomalyDetectorResponse {
    public Object accessDeniedException;
    public DeleteAnomalyDetectorResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DeleteAnomalyDetectorResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeleteAnomalyDetectorResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteAnomalyDetectorResponse;
    public DeleteAnomalyDetectorResponse withDeleteAnomalyDetectorResponse(java.util.Map<String, Object> deleteAnomalyDetectorResponse) {
        this.deleteAnomalyDetectorResponse = deleteAnomalyDetectorResponse;
        return this;
    }
    public Object internalServerException;
    public DeleteAnomalyDetectorResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DeleteAnomalyDetectorResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteAnomalyDetectorResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DeleteAnomalyDetectorResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object validationException;
    public DeleteAnomalyDetectorResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}