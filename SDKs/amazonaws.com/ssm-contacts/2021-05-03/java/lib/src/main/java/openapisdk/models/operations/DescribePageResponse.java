package openapisdk.models.operations;



public class DescribePageResponse {
    public Object accessDeniedException;
    public DescribePageResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribePageResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object dataEncryptionException;
    public DescribePageResponse withDataEncryptionException(Object dataEncryptionException) {
        this.dataEncryptionException = dataEncryptionException;
        return this;
    }
    public openapisdk.models.shared.DescribePageResult describePageResult;
    public DescribePageResponse withDescribePageResult(openapisdk.models.shared.DescribePageResult describePageResult) {
        this.describePageResult = describePageResult;
        return this;
    }
    public Object internalServerException;
    public DescribePageResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribePageResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribePageResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribePageResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribePageResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}