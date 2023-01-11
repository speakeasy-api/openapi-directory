package openapisdk.models.operations;



public class DeletePartitionIndexResponse {
    public Object conflictException;
    public DeletePartitionIndexResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DeletePartitionIndexResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deletePartitionIndexResponse;
    public DeletePartitionIndexResponse withDeletePartitionIndexResponse(java.util.Map<String, Object> deletePartitionIndexResponse) {
        this.deletePartitionIndexResponse = deletePartitionIndexResponse;
        return this;
    }
    public Object entityNotFoundException;
    public DeletePartitionIndexResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object glueEncryptionException;
    public DeletePartitionIndexResponse withGlueEncryptionException(Object glueEncryptionException) {
        this.glueEncryptionException = glueEncryptionException;
        return this;
    }
    public Object internalServiceException;
    public DeletePartitionIndexResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public DeletePartitionIndexResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public DeletePartitionIndexResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public DeletePartitionIndexResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}