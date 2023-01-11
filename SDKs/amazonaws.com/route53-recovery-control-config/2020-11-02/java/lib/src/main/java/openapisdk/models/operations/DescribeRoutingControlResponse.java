package openapisdk.models.operations;



public class DescribeRoutingControlResponse {
    public Object accessDeniedException;
    public DescribeRoutingControlResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public Object conflictException;
    public DescribeRoutingControlResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public DescribeRoutingControlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeRoutingControlResponse describeRoutingControlResponse;
    public DescribeRoutingControlResponse withDescribeRoutingControlResponse(openapisdk.models.shared.DescribeRoutingControlResponse describeRoutingControlResponse) {
        this.describeRoutingControlResponse = describeRoutingControlResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeRoutingControlResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeRoutingControlResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeRoutingControlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeRoutingControlResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeRoutingControlResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}