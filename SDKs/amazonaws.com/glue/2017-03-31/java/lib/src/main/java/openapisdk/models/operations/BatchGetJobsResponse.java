package openapisdk.models.operations;



public class BatchGetJobsResponse {
    public openapisdk.models.shared.BatchGetJobsResponse batchGetJobsResponse;
    public BatchGetJobsResponse withBatchGetJobsResponse(openapisdk.models.shared.BatchGetJobsResponse batchGetJobsResponse) {
        this.batchGetJobsResponse = batchGetJobsResponse;
        return this;
    }
    public String contentType;
    public BatchGetJobsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public BatchGetJobsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public BatchGetJobsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public BatchGetJobsResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public BatchGetJobsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}