package openapisdk.models.operations;



public class DescribeGroupResponse {
    public Object accessDeniedException;
    public DescribeGroupResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeGroupResponse describeGroupResponse;
    public DescribeGroupResponse withDescribeGroupResponse(openapisdk.models.shared.DescribeGroupResponse describeGroupResponse) {
        this.describeGroupResponse = describeGroupResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeGroupResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeGroupResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeGroupResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}