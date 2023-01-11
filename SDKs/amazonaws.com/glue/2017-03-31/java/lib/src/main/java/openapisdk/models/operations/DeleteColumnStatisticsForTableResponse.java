package openapisdk.models.operations;



public class DeleteColumnStatisticsForTableResponse {
    public String contentType;
    public DeleteColumnStatisticsForTableResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public java.util.Map<String, Object> deleteColumnStatisticsForTableResponse;
    public DeleteColumnStatisticsForTableResponse withDeleteColumnStatisticsForTableResponse(java.util.Map<String, Object> deleteColumnStatisticsForTableResponse) {
        this.deleteColumnStatisticsForTableResponse = deleteColumnStatisticsForTableResponse;
        return this;
    }
    public Object entityNotFoundException;
    public DeleteColumnStatisticsForTableResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object glueEncryptionException;
    public DeleteColumnStatisticsForTableResponse withGlueEncryptionException(Object glueEncryptionException) {
        this.glueEncryptionException = glueEncryptionException;
        return this;
    }
    public Object internalServiceException;
    public DeleteColumnStatisticsForTableResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public DeleteColumnStatisticsForTableResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public DeleteColumnStatisticsForTableResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public DeleteColumnStatisticsForTableResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}