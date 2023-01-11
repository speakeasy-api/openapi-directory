package openapisdk.models.operations;



public class DeletePartitionResponse {
    public String contentType;
    public DeletePartitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deletePartitionResponse;
    public DeletePartitionResponse withDeletePartitionResponse(java.util.Map<String, Object> deletePartitionResponse) {
        this.deletePartitionResponse = deletePartitionResponse;
        return this;
    }
    public Object entityNotFoundException;
    public DeletePartitionResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object internalServiceException;
    public DeletePartitionResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public DeletePartitionResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public DeletePartitionResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public DeletePartitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}