package openapisdk.models.operations;



public class BatchGetDevEndpointsResponse {
    public Object accessDeniedException;
    public BatchGetDevEndpointsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public openapisdk.models.shared.BatchGetDevEndpointsResponse batchGetDevEndpointsResponse;
    public BatchGetDevEndpointsResponse withBatchGetDevEndpointsResponse(openapisdk.models.shared.BatchGetDevEndpointsResponse batchGetDevEndpointsResponse) {
        this.batchGetDevEndpointsResponse = batchGetDevEndpointsResponse;
        return this;
    }
    public String contentType;
    public BatchGetDevEndpointsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public BatchGetDevEndpointsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public BatchGetDevEndpointsResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public BatchGetDevEndpointsResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public BatchGetDevEndpointsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}