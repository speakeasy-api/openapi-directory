package openapisdk.models.operations;



public class DescribeInferenceSchedulerResponse {
    public Object accessDeniedException;
    public DescribeInferenceSchedulerResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeInferenceSchedulerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeInferenceSchedulerResponse describeInferenceSchedulerResponse;
    public DescribeInferenceSchedulerResponse withDescribeInferenceSchedulerResponse(openapisdk.models.shared.DescribeInferenceSchedulerResponse describeInferenceSchedulerResponse) {
        this.describeInferenceSchedulerResponse = describeInferenceSchedulerResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeInferenceSchedulerResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeInferenceSchedulerResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeInferenceSchedulerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeInferenceSchedulerResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeInferenceSchedulerResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}