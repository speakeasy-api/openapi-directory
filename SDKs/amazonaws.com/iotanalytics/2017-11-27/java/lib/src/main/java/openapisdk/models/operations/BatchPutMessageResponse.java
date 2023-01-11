package openapisdk.models.operations;



public class BatchPutMessageResponse {
    public openapisdk.models.shared.BatchPutMessageResponse batchPutMessageResponse;
    public BatchPutMessageResponse withBatchPutMessageResponse(openapisdk.models.shared.BatchPutMessageResponse batchPutMessageResponse) {
        this.batchPutMessageResponse = batchPutMessageResponse;
        return this;
    }
    public String contentType;
    public BatchPutMessageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalFailureException;
    public BatchPutMessageResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public BatchPutMessageResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public BatchPutMessageResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public BatchPutMessageResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public BatchPutMessageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public BatchPutMessageResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}