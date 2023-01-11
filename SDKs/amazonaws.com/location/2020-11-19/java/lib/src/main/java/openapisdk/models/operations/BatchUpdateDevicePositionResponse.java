package openapisdk.models.operations;



public class BatchUpdateDevicePositionResponse {
    public Object accessDeniedException;
    public BatchUpdateDevicePositionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.BatchUpdateDevicePositionResponse batchUpdateDevicePositionResponse;
    public BatchUpdateDevicePositionResponse withBatchUpdateDevicePositionResponse(openapisdk.models.shared.BatchUpdateDevicePositionResponse batchUpdateDevicePositionResponse) {
        this.batchUpdateDevicePositionResponse = batchUpdateDevicePositionResponse;
        return this;
    }
    public String contentType;
    public BatchUpdateDevicePositionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public BatchUpdateDevicePositionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public BatchUpdateDevicePositionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public BatchUpdateDevicePositionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public BatchUpdateDevicePositionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public BatchUpdateDevicePositionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}