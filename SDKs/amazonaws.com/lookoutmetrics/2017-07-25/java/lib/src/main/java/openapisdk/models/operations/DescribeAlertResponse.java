package openapisdk.models.operations;



public class DescribeAlertResponse {
    public Object accessDeniedException;
    public DescribeAlertResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeAlertResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAlertResponse describeAlertResponse;
    public DescribeAlertResponse withDescribeAlertResponse(openapisdk.models.shared.DescribeAlertResponse describeAlertResponse) {
        this.describeAlertResponse = describeAlertResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeAlertResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeAlertResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeAlertResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeAlertResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
    public Object validationException;
    public DescribeAlertResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}