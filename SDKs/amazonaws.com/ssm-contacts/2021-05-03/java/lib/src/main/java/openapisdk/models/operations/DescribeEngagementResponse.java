package openapisdk.models.operations;



public class DescribeEngagementResponse {
    public Object accessDeniedException;
    public DescribeEngagementResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeEngagementResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dataEncryptionException;
    public DescribeEngagementResponse withDataEncryptionException(Object dataEncryptionException) {
        this.dataEncryptionException = dataEncryptionException;
        return this;
    }
    public openapisdk.models.shared.DescribeEngagementResult describeEngagementResult;
    public DescribeEngagementResponse withDescribeEngagementResult(openapisdk.models.shared.DescribeEngagementResult describeEngagementResult) {
        this.describeEngagementResult = describeEngagementResult;
        return this;
    }
    public Object internalServerException;
    public DescribeEngagementResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeEngagementResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeEngagementResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeEngagementResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeEngagementResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}