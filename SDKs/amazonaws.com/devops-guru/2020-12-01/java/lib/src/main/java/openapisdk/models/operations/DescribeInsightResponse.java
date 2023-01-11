package openapisdk.models.operations;



public class DescribeInsightResponse {
    public Object accessDeniedException;
    public DescribeInsightResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeInsightResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeInsightResponse describeInsightResponse;
    public DescribeInsightResponse withDescribeInsightResponse(openapisdk.models.shared.DescribeInsightResponse describeInsightResponse) {
        this.describeInsightResponse = describeInsightResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeInsightResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeInsightResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeInsightResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeInsightResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeInsightResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}