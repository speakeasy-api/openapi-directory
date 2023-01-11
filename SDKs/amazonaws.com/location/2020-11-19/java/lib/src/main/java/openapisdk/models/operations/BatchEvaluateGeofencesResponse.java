package openapisdk.models.operations;



public class BatchEvaluateGeofencesResponse {
    public Object accessDeniedException;
    public BatchEvaluateGeofencesResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.BatchEvaluateGeofencesResponse batchEvaluateGeofencesResponse;
    public BatchEvaluateGeofencesResponse withBatchEvaluateGeofencesResponse(openapisdk.models.shared.BatchEvaluateGeofencesResponse batchEvaluateGeofencesResponse) {
        this.batchEvaluateGeofencesResponse = batchEvaluateGeofencesResponse;
        return this;
    }
    public String contentType;
    public BatchEvaluateGeofencesResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public BatchEvaluateGeofencesResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public BatchEvaluateGeofencesResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public BatchEvaluateGeofencesResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public BatchEvaluateGeofencesResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public BatchEvaluateGeofencesResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}