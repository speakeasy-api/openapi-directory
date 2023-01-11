package openapisdk.models.operations;



public class GetColumnStatisticsForPartitionResponse {
    public String contentType;
    public GetColumnStatisticsForPartitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetColumnStatisticsForPartitionResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetColumnStatisticsForPartitionResponse getColumnStatisticsForPartitionResponse;
    public GetColumnStatisticsForPartitionResponse withGetColumnStatisticsForPartitionResponse(openapisdk.models.shared.GetColumnStatisticsForPartitionResponse getColumnStatisticsForPartitionResponse) {
        this.getColumnStatisticsForPartitionResponse = getColumnStatisticsForPartitionResponse;
        return this;
    }
    public Object glueEncryptionException;
    public GetColumnStatisticsForPartitionResponse withGlueEncryptionException(Object glueEncryptionException) {
        this.glueEncryptionException = glueEncryptionException;
        return this;
    }
    public Object internalServiceException;
    public GetColumnStatisticsForPartitionResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetColumnStatisticsForPartitionResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetColumnStatisticsForPartitionResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetColumnStatisticsForPartitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}