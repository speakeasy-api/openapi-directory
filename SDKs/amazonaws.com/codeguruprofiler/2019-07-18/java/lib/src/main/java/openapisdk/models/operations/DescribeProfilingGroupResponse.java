package openapisdk.models.operations;



public class DescribeProfilingGroupResponse {
    public String contentType;
    public DescribeProfilingGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeProfilingGroupResponse describeProfilingGroupResponse;
    public DescribeProfilingGroupResponse withDescribeProfilingGroupResponse(openapisdk.models.shared.DescribeProfilingGroupResponse describeProfilingGroupResponse) {
        this.describeProfilingGroupResponse = describeProfilingGroupResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeProfilingGroupResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeProfilingGroupResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeProfilingGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeProfilingGroupResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeProfilingGroupResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}