package openapisdk.models.operations;



public class BatchGetWorkflowsResponse {
    public openapisdk.models.shared.BatchGetWorkflowsResponse batchGetWorkflowsResponse;
    public BatchGetWorkflowsResponse withBatchGetWorkflowsResponse(openapisdk.models.shared.BatchGetWorkflowsResponse batchGetWorkflowsResponse) {
        this.batchGetWorkflowsResponse = batchGetWorkflowsResponse;
        return this;
    }
    public String contentType;
    public BatchGetWorkflowsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public BatchGetWorkflowsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public BatchGetWorkflowsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public BatchGetWorkflowsResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public BatchGetWorkflowsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}