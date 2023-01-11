package openapisdk.models.operations;



public class BatchPutGeofenceResponse {
    public Object accessDeniedException;
    public BatchPutGeofenceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.BatchPutGeofenceResponse batchPutGeofenceResponse;
    public BatchPutGeofenceResponse withBatchPutGeofenceResponse(openapisdk.models.shared.BatchPutGeofenceResponse batchPutGeofenceResponse) {
        this.batchPutGeofenceResponse = batchPutGeofenceResponse;
        return this;
    }
    public String contentType;
    public BatchPutGeofenceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public BatchPutGeofenceResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public BatchPutGeofenceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public BatchPutGeofenceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public BatchPutGeofenceResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public BatchPutGeofenceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}