package openapisdk.models.operations;



public class DescribeIntentResponse {
    public String contentType;
    public DescribeIntentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeIntentResponse describeIntentResponse;
    public DescribeIntentResponse withDescribeIntentResponse(openapisdk.models.shared.DescribeIntentResponse describeIntentResponse) {
        this.describeIntentResponse = describeIntentResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeIntentResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeIntentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public DescribeIntentResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public DescribeIntentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeIntentResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeIntentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}