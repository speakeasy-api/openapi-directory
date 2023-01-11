package openapisdk.models.operations;



public class BatchStopJobRunResponse {
    public openapisdk.models.shared.BatchStopJobRunResponse batchStopJobRunResponse;
    public BatchStopJobRunResponse withBatchStopJobRunResponse(openapisdk.models.shared.BatchStopJobRunResponse batchStopJobRunResponse) {
        this.batchStopJobRunResponse = batchStopJobRunResponse;
        return this;
    }
    public String contentType;
    public BatchStopJobRunResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public BatchStopJobRunResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public BatchStopJobRunResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public BatchStopJobRunResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public BatchStopJobRunResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}