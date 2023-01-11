package openapisdk.models.operations;



public class DescribeTableResponse {
    public Object accessDeniedException;
    public DescribeTableResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeTableResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeTableResponse describeTableResponse;
    public DescribeTableResponse withDescribeTableResponse(openapisdk.models.shared.DescribeTableResponse describeTableResponse) {
        this.describeTableResponse = describeTableResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeTableResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object invalidEndpointException;
    public DescribeTableResponse withInvalidEndpointException(Object invalidEndpointException) {
        this.invalidEndpointException = invalidEndpointException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeTableResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeTableResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeTableResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeTableResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}