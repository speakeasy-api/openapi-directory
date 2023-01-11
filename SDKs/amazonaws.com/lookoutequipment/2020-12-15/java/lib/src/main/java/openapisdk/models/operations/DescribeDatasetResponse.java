package openapisdk.models.operations;



public class DescribeDatasetResponse {
    public Object accessDeniedException;
    public DescribeDatasetResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeDatasetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDatasetResponse describeDatasetResponse;
    public DescribeDatasetResponse withDescribeDatasetResponse(openapisdk.models.shared.DescribeDatasetResponse describeDatasetResponse) {
        this.describeDatasetResponse = describeDatasetResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeDatasetResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeDatasetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeDatasetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeDatasetResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeDatasetResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}