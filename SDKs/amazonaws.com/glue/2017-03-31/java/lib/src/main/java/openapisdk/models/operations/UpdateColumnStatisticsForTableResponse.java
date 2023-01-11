package openapisdk.models.operations;



public class UpdateColumnStatisticsForTableResponse {
    public String contentType;
    public UpdateColumnStatisticsForTableResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public UpdateColumnStatisticsForTableResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public Object glueEncryptionException;
    public UpdateColumnStatisticsForTableResponse withGlueEncryptionException(Object glueEncryptionException) {
        this.glueEncryptionException = glueEncryptionException;
        return this;
    }
    public Object internalServiceException;
    public UpdateColumnStatisticsForTableResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public UpdateColumnStatisticsForTableResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public UpdateColumnStatisticsForTableResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public UpdateColumnStatisticsForTableResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.UpdateColumnStatisticsForTableResponse updateColumnStatisticsForTableResponse;
    public UpdateColumnStatisticsForTableResponse withUpdateColumnStatisticsForTableResponse(openapisdk.models.shared.UpdateColumnStatisticsForTableResponse updateColumnStatisticsForTableResponse) {
        this.updateColumnStatisticsForTableResponse = updateColumnStatisticsForTableResponse;
        return this;
    }
}