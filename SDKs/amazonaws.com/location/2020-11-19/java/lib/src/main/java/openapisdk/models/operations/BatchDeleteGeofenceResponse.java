package openapisdk.models.operations;



public class BatchDeleteGeofenceResponse {
    public Object accessDeniedException;
    public BatchDeleteGeofenceResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.BatchDeleteGeofenceResponse batchDeleteGeofenceResponse;
    public BatchDeleteGeofenceResponse withBatchDeleteGeofenceResponse(openapisdk.models.shared.BatchDeleteGeofenceResponse batchDeleteGeofenceResponse) {
        this.batchDeleteGeofenceResponse = batchDeleteGeofenceResponse;
        return this;
    }
    public String contentType;
    public BatchDeleteGeofenceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public BatchDeleteGeofenceResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public BatchDeleteGeofenceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public BatchDeleteGeofenceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public BatchDeleteGeofenceResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public BatchDeleteGeofenceResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}