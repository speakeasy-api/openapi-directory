package openapisdk.models.operations;



public class BatchGetBlueprintsResponse {
    public openapisdk.models.shared.BatchGetBlueprintsResponse batchGetBlueprintsResponse;
    public BatchGetBlueprintsResponse withBatchGetBlueprintsResponse(openapisdk.models.shared.BatchGetBlueprintsResponse batchGetBlueprintsResponse) {
        this.batchGetBlueprintsResponse = batchGetBlueprintsResponse;
        return this;
    }
    public String contentType;
    public BatchGetBlueprintsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public BatchGetBlueprintsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public BatchGetBlueprintsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public BatchGetBlueprintsResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public BatchGetBlueprintsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}