package openapisdk.models.operations;



public class DescribeEventSourceResponse {
    public String contentType;
    public DescribeEventSourceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeEventSourceResponse describeEventSourceResponse;
    public DescribeEventSourceResponse withDescribeEventSourceResponse(openapisdk.models.shared.DescribeEventSourceResponse describeEventSourceResponse) {
        this.describeEventSourceResponse = describeEventSourceResponse;
        return this;
    }
    public Object internalException;
    public DescribeEventSourceResponse withInternalException(Object internalException) {
        this.internalException = internalException;
        return this;
    }
    public Object operationDisabledException;
    public DescribeEventSourceResponse withOperationDisabledException(Object operationDisabledException) {
        this.operationDisabledException = operationDisabledException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeEventSourceResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeEventSourceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}