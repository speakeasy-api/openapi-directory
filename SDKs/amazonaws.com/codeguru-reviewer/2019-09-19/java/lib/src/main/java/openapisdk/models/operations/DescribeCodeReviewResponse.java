package openapisdk.models.operations;



public class DescribeCodeReviewResponse {
    public Object accessDeniedException;
    public DescribeCodeReviewResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeCodeReviewResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeCodeReviewResponse describeCodeReviewResponse;
    public DescribeCodeReviewResponse withDescribeCodeReviewResponse(openapisdk.models.shared.DescribeCodeReviewResponse describeCodeReviewResponse) {
        this.describeCodeReviewResponse = describeCodeReviewResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeCodeReviewResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeCodeReviewResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeCodeReviewResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeCodeReviewResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeCodeReviewResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}