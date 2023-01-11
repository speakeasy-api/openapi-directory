package openapisdk.models.operations;



public class RegisterUsageResponse {
    public String contentType;
    public RegisterUsageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object customerNotEntitledException;
    public RegisterUsageResponse withCustomerNotEntitledException(Object customerNotEntitledException) {
        this.customerNotEntitledException = customerNotEntitledException;
        return this;
    }
    public Object disabledApiException;
    public RegisterUsageResponse withDisabledApiException(Object disabledApiException) {
        this.disabledApiException = disabledApiException;
        return this;
    }
    public Object internalServiceErrorException;
    public RegisterUsageResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidProductCodeException;
    public RegisterUsageResponse withInvalidProductCodeException(Object invalidProductCodeException) {
        this.invalidProductCodeException = invalidProductCodeException;
        return this;
    }
    public Object invalidPublicKeyVersionException;
    public RegisterUsageResponse withInvalidPublicKeyVersionException(Object invalidPublicKeyVersionException) {
        this.invalidPublicKeyVersionException = invalidPublicKeyVersionException;
        return this;
    }
    public Object invalidRegionException;
    public RegisterUsageResponse withInvalidRegionException(Object invalidRegionException) {
        this.invalidRegionException = invalidRegionException;
        return this;
    }
    public Object platformNotSupportedException;
    public RegisterUsageResponse withPlatformNotSupportedException(Object platformNotSupportedException) {
        this.platformNotSupportedException = platformNotSupportedException;
        return this;
    }
    public openapisdk.models.shared.RegisterUsageResult registerUsageResult;
    public RegisterUsageResponse withRegisterUsageResult(openapisdk.models.shared.RegisterUsageResult registerUsageResult) {
        this.registerUsageResult = registerUsageResult;
        return this;
    }
    public Long statusCode;
    public RegisterUsageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public RegisterUsageResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}