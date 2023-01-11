package openapisdk.models.operations;



public class DescribeBotResponse {
    public String contentType;
    public DescribeBotResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeBotResponse describeBotResponse;
    public DescribeBotResponse withDescribeBotResponse(openapisdk.models.shared.DescribeBotResponse describeBotResponse) {
        this.describeBotResponse = describeBotResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeBotResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeBotResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public DescribeBotResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public DescribeBotResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeBotResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeBotResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}