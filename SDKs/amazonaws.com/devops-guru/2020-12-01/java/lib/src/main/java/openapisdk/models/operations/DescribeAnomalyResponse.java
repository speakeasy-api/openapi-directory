package openapisdk.models.operations;



public class DescribeAnomalyResponse {
    public Object accessDeniedException;
    public DescribeAnomalyResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeAnomalyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAnomalyResponse describeAnomalyResponse;
    public DescribeAnomalyResponse withDescribeAnomalyResponse(openapisdk.models.shared.DescribeAnomalyResponse describeAnomalyResponse) {
        this.describeAnomalyResponse = describeAnomalyResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeAnomalyResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeAnomalyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeAnomalyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeAnomalyResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeAnomalyResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}