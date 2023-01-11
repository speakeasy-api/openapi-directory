package openapisdk.models.operations;



public class UpdateColumnStatisticsForPartitionResponse {
    public String contentType;
    public UpdateColumnStatisticsForPartitionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public UpdateColumnStatisticsForPartitionResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object glueEncryptionException;
    public UpdateColumnStatisticsForPartitionResponse withGlueEncryptionException(Object glueEncryptionException) {
        this.glueEncryptionException = glueEncryptionException;
        return this;
    }
    public Object internalServiceException;
    public UpdateColumnStatisticsForPartitionResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public UpdateColumnStatisticsForPartitionResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public UpdateColumnStatisticsForPartitionResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public UpdateColumnStatisticsForPartitionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateColumnStatisticsForPartitionResponse updateColumnStatisticsForPartitionResponse;
    public UpdateColumnStatisticsForPartitionResponse withUpdateColumnStatisticsForPartitionResponse(openapisdk.models.shared.UpdateColumnStatisticsForPartitionResponse updateColumnStatisticsForPartitionResponse) {
        this.updateColumnStatisticsForPartitionResponse = updateColumnStatisticsForPartitionResponse;
        return this;
    }
}