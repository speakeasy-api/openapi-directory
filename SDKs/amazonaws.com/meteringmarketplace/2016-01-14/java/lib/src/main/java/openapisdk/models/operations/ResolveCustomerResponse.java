package openapisdk.models.operations;



public class ResolveCustomerResponse {
    public String contentType;
    public ResolveCustomerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object disabledApiException;
    public ResolveCustomerResponse withDisabledApiException(Object disabledApiException) {
        this.disabledApiException = disabledApiException;
        return this;
    }
    public Object expiredTokenException;
    public ResolveCustomerResponse withExpiredTokenException(Object expiredTokenException) {
        this.expiredTokenException = expiredTokenException;
        return this;
    }
    public Object internalServiceErrorException;
    public ResolveCustomerResponse withInternalServiceErrorException(Object internalServiceErrorException) {
        this.internalServiceErrorException = internalServiceErrorException;
        return this;
    }
    public Object invalidTokenException;
    public ResolveCustomerResponse withInvalidTokenException(Object invalidTokenException) {
        this.invalidTokenException = invalidTokenException;
        return this;
    }
    public openapisdk.models.shared.ResolveCustomerResult resolveCustomerResult;
    public ResolveCustomerResponse withResolveCustomerResult(openapisdk.models.shared.ResolveCustomerResult resolveCustomerResult) {
        this.resolveCustomerResult = resolveCustomerResult;
        return this;
    }
    public Long statusCode;
    public ResolveCustomerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public ResolveCustomerResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}