package openapisdk.models.operations;



public class BatchRevokePermissionsResponse {
    public openapisdk.models.shared.BatchRevokePermissionsResponse batchRevokePermissionsResponse;
    public BatchRevokePermissionsResponse withBatchRevokePermissionsResponse(openapisdk.models.shared.BatchRevokePermissionsResponse batchRevokePermissionsResponse) {
        this.batchRevokePermissionsResponse = batchRevokePermissionsResponse;
        return this;
    }
    public String contentType;
    public BatchRevokePermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object invalidInputException;
    public BatchRevokePermissionsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public BatchRevokePermissionsResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public BatchRevokePermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}