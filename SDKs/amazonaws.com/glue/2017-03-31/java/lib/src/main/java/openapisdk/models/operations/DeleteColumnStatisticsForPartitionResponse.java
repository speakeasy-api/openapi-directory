package openapisdk.models.operations;



public class DeleteColumnStatisticsForPartitionResponse {
    public String contentType;
    public DeleteColumnStatisticsForPartitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteColumnStatisticsForPartitionResponse;
    public DeleteColumnStatisticsForPartitionResponse withDeleteColumnStatisticsForPartitionResponse(java.util.Map<String, Object> deleteColumnStatisticsForPartitionResponse) {
        this.deleteColumnStatisticsForPartitionResponse = deleteColumnStatisticsForPartitionResponse;
        return this;
    }
    public Object entityNotFoundException;
    public DeleteColumnStatisticsForPartitionResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object glueEncryptionException;
    public DeleteColumnStatisticsForPartitionResponse withGlueEncryptionException(Object glueEncryptionException) {
        this.glueEncryptionException = glueEncryptionException;
        return this;
    }
    public Object internalServiceException;
    public DeleteColumnStatisticsForPartitionResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public DeleteColumnStatisticsForPartitionResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public DeleteColumnStatisticsForPartitionResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public DeleteColumnStatisticsForPartitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}