package openapisdk.models.operations;



public class DescribeTrackerResponse {
    public Object accessDeniedException;
    public DescribeTrackerResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeTrackerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeTrackerResponse describeTrackerResponse;
    public DescribeTrackerResponse withDescribeTrackerResponse(openapisdk.models.shared.DescribeTrackerResponse describeTrackerResponse) {
        this.describeTrackerResponse = describeTrackerResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeTrackerResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeTrackerResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeTrackerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeTrackerResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeTrackerResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}