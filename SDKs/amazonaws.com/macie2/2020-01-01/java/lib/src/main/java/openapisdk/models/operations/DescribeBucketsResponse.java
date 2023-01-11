package openapisdk.models.operations;



public class DescribeBucketsResponse {
    public Object accessDeniedException;
    public DescribeBucketsResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DescribeBucketsResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DescribeBucketsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeBucketsResponse describeBucketsResponse;
    public DescribeBucketsResponse withDescribeBucketsResponse(openapisdk.models.shared.DescribeBucketsResponse describeBucketsResponse) {
        this.describeBucketsResponse = describeBucketsResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeBucketsResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeBucketsResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Object serviceQuotaExceededException;
    public DescribeBucketsResponse withServiceQuotaExceededException(Object serviceQuotaExceededException) {
        this.serviceQuotaExceededException = serviceQuotaExceededException;
        return this;
    }
    public Long statusCode;
    public DescribeBucketsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeBucketsResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeBucketsResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}