package openapisdk.models.operations;



public class DescribeBotAliasResponse {
    public String contentType;
    public DescribeBotAliasResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeBotAliasResponse describeBotAliasResponse;
    public DescribeBotAliasResponse withDescribeBotAliasResponse(openapisdk.models.shared.DescribeBotAliasResponse describeBotAliasResponse) {
        this.describeBotAliasResponse = describeBotAliasResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeBotAliasResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeBotAliasResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public DescribeBotAliasResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public DescribeBotAliasResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeBotAliasResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeBotAliasResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}