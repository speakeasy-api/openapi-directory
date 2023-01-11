package openapisdk.models.operations;



public class BatchGrantPermissionsResponse {
    public openapisdk.models.shared.BatchGrantPermissionsResponse batchGrantPermissionsResponse;
    public BatchGrantPermissionsResponse withBatchGrantPermissionsResponse(openapisdk.models.shared.BatchGrantPermissionsResponse batchGrantPermissionsResponse) {
        this.batchGrantPermissionsResponse = batchGrantPermissionsResponse;
        return this;
    }
    public String contentType;
    public BatchGrantPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public BatchGrantPermissionsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public BatchGrantPermissionsResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public BatchGrantPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}