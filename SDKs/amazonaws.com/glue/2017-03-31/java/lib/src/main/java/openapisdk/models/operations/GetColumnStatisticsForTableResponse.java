package openapisdk.models.operations;



public class GetColumnStatisticsForTableResponse {
    public String contentType;
    public GetColumnStatisticsForTableResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object entityNotFoundException;
    public GetColumnStatisticsForTableResponse withEntityNotFoundException(Object entityNotFoundException) {
        this.entityNotFoundException = entityNotFoundException;
        return this;
    }
    public openapisdk.models.shared.GetColumnStatisticsForTableResponse getColumnStatisticsForTableResponse;
    public GetColumnStatisticsForTableResponse withGetColumnStatisticsForTableResponse(openapisdk.models.shared.GetColumnStatisticsForTableResponse getColumnStatisticsForTableResponse) {
        this.getColumnStatisticsForTableResponse = getColumnStatisticsForTableResponse;
        return this;
    }
    public Object glueEncryptionException;
    public GetColumnStatisticsForTableResponse withGlueEncryptionException(Object glueEncryptionException) {
        this.glueEncryptionException = glueEncryptionException;
        return this;
    }
    public Object internalServiceException;
    public GetColumnStatisticsForTableResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidInputException;
    public GetColumnStatisticsForTableResponse withInvalidInputException(Object invalidInputException) {
        this.invalidInputException = invalidInputException;
        return this;
    }
    public Object operationTimeoutException;
    public GetColumnStatisticsForTableResponse withOperationTimeoutException(Object operationTimeoutException) {
        this.operationTimeoutException = operationTimeoutException;
        return this;
    }
    public Long statusCode;
    public GetColumnStatisticsForTableResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}