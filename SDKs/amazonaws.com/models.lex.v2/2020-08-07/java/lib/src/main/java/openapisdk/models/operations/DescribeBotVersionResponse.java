package openapisdk.models.operations;



public class DescribeBotVersionResponse {
    public String contentType;
    public DescribeBotVersionResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeBotVersionResponse describeBotVersionResponse;
    public DescribeBotVersionResponse withDescribeBotVersionResponse(openapisdk.models.shared.DescribeBotVersionResponse describeBotVersionResponse) {
        this.describeBotVersionResponse = describeBotVersionResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeBotVersionResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeBotVersionResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public DescribeBotVersionResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public DescribeBotVersionResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeBotVersionResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeBotVersionResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}