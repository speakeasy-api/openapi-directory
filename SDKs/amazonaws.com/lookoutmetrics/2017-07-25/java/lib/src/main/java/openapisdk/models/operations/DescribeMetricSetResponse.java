package openapisdk.models.operations;



public class DescribeMetricSetResponse {
    public Object accessDeniedException;
    public DescribeMetricSetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeMetricSetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeMetricSetResponse describeMetricSetResponse;
    public DescribeMetricSetResponse withDescribeMetricSetResponse(openapisdk.models.shared.DescribeMetricSetResponse describeMetricSetResponse) {
        this.describeMetricSetResponse = describeMetricSetResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeMetricSetResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeMetricSetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeMetricSetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeMetricSetResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object validationException;
    public DescribeMetricSetResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}