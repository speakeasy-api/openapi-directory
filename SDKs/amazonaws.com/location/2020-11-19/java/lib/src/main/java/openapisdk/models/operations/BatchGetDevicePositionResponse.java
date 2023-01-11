package openapisdk.models.operations;



public class BatchGetDevicePositionResponse {
    public Object accessDeniedException;
    public BatchGetDevicePositionResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.BatchGetDevicePositionResponse batchGetDevicePositionResponse;
    public BatchGetDevicePositionResponse withBatchGetDevicePositionResponse(openapisdk.models.shared.BatchGetDevicePositionResponse batchGetDevicePositionResponse) {
        this.batchGetDevicePositionResponse = batchGetDevicePositionResponse;
        return this;
    }
    public String contentType;
    public BatchGetDevicePositionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServerException;
    public BatchGetDevicePositionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public BatchGetDevicePositionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public BatchGetDevicePositionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public BatchGetDevicePositionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public BatchGetDevicePositionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}