package openapisdk.models.operations;



public class DescribeComponentResponse {
    public Object accessDeniedException;
    public DescribeComponentResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeComponentResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeComponentResponse describeComponentResponse;
    public DescribeComponentResponse withDescribeComponentResponse(openapisdk.models.shared.DescribeComponentResponse describeComponentResponse) {
        this.describeComponentResponse = describeComponentResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeComponentResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeComponentResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeComponentResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeComponentResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeComponentResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}