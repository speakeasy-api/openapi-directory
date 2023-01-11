package openapisdk.models.operations;



public class BatchMeterUsageResponse {
    public openapisdk.models.shared.BatchMeterUsageResult batchMeterUsageResult;
    public BatchMeterUsageResponse withBatchMeterUsageResult(openapisdk.models.shared.BatchMeterUsageResult batchMeterUsageResult) {
        this.batchMeterUsageResult = batchMeterUsageResult;
        return this;
    }
    public String contentType;
    public BatchMeterUsageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object disabledApiException;
    public BatchMeterUsageResponse withDisabledApiException(Object disabledApiException) {
        this.disabledApiException = disabledApiException;
        return this;
    }
    public Object internalServiceErrorException;
    public BatchMeterUsageResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidCustomerIdentifierException;
    public BatchMeterUsageResponse withInvalidCustomerIdentifierException(Object invalidCustomerIdentifierException) {
        this.invalidCustomerIdentifierException = invalidCustomerIdentifierException;
        return this;
    }
    public Object invalidProductCodeException;
    public BatchMeterUsageResponse withInvalidProductCodeException(Object invalidProductCodeException) {
        this.invalidProductCodeException = invalidProductCodeException;
        return this;
    }
    public Object invalidTagException;
    public BatchMeterUsageResponse withInvalidTagException(Object invalidTagException) {
        this.invalidTagException = invalidTagException;
        return this;
    }
    public Object invalidUsageAllocationsException;
    public BatchMeterUsageResponse withInvalidUsageAllocationsException(Object invalidUsageAllocationsException) {
        this.invalidUsageAllocationsException = invalidUsageAllocationsException;
        return this;
    }
    public Object invalidUsageDimensionException;
    public BatchMeterUsageResponse withInvalidUsageDimensionException(Object invalidUsageDimensionException) {
        this.invalidUsageDimensionException = invalidUsageDimensionException;
        return this;
    }
    public Long statusCode;
    public BatchMeterUsageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public BatchMeterUsageResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object timestampOutOfBoundsException;
    public BatchMeterUsageResponse withTimestampOutOfBoundsException(Object timestampOutOfBoundsException) {
        this.timestampOutOfBoundsException = timestampOutOfBoundsException;
        return this;
    }
}