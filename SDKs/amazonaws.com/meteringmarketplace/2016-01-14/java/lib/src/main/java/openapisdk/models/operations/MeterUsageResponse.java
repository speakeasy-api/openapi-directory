package openapisdk.models.operations;



public class MeterUsageResponse {
    public String contentType;
    public MeterUsageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object customerNotEntitledException;
    public MeterUsageResponse withCustomerNotEntitledException(Object customerNotEntitledException) {
        this.customerNotEntitledException = customerNotEntitledException;
        return this;
    }
    public Object duplicateRequestException;
    public MeterUsageResponse withDuplicateRequestException(Object duplicateRequestException) {
        this.duplicateRequestException = duplicateRequestException;
        return this;
    }
    public Object internalServiceErrorException;
    public MeterUsageResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidEndpointRegionException;
    public MeterUsageResponse withInvalidEndpointRegionException(Object invalidEndpointRegionException) {
        this.invalidEndpointRegionException = invalidEndpointRegionException;
        return this;
    }
    public Object invalidProductCodeException;
    public MeterUsageResponse withInvalidProductCodeException(Object invalidProductCodeException) {
        this.invalidProductCodeException = invalidProductCodeException;
        return this;
    }
    public Object invalidTagException;
    public MeterUsageResponse withInvalidTagException(Object invalidTagException) {
        this.invalidTagException = invalidTagException;
        return this;
    }
    public Object invalidUsageAllocationsException;
    public MeterUsageResponse withInvalidUsageAllocationsException(Object invalidUsageAllocationsException) {
        this.invalidUsageAllocationsException = invalidUsageAllocationsException;
        return this;
    }
    public Object invalidUsageDimensionException;
    public MeterUsageResponse withInvalidUsageDimensionException(Object invalidUsageDimensionException) {
        this.invalidUsageDimensionException = invalidUsageDimensionException;
        return this;
    }
    public openapisdk.models.shared.MeterUsageResult meterUsageResult;
    public MeterUsageResponse withMeterUsageResult(openapisdk.models.shared.MeterUsageResult meterUsageResult) {
        this.meterUsageResult = meterUsageResult;
        return this;
    }
    public Long statusCode;
    public MeterUsageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public MeterUsageResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object timestampOutOfBoundsException;
    public MeterUsageResponse withTimestampOutOfBoundsException(Object timestampOutOfBoundsException) {
        this.timestampOutOfBoundsException = timestampOutOfBoundsException;
        return this;
    }
}