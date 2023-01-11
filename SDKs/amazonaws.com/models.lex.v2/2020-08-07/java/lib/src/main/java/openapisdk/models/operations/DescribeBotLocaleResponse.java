package openapisdk.models.operations;



public class DescribeBotLocaleResponse {
    public String contentType;
    public DescribeBotLocaleResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeBotLocaleResponse describeBotLocaleResponse;
    public DescribeBotLocaleResponse withDescribeBotLocaleResponse(openapisdk.models.shared.DescribeBotLocaleResponse describeBotLocaleResponse) {
        this.describeBotLocaleResponse = describeBotLocaleResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeBotLocaleResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeBotLocaleResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public DescribeBotLocaleResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public DescribeBotLocaleResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeBotLocaleResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeBotLocaleResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}