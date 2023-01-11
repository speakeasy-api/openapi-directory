package openapisdk.models.operations;



public class DescribeDataIngestionJobResponse {
    public Object accessDeniedException;
    public DescribeDataIngestionJobResponse withAccessDeniedException(Object accessDeniedException) {
        this.accessDeniedException = accessDeniedException;
        return this;
    }
    public String contentType;
    public DescribeDataIngestionJobResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeDataIngestionJobResponse describeDataIngestionJobResponse;
    public DescribeDataIngestionJobResponse withDescribeDataIngestionJobResponse(openapisdk.models.shared.DescribeDataIngestionJobResponse describeDataIngestionJobResponse) {
        this.describeDataIngestionJobResponse = describeDataIngestionJobResponse;
        return this;
    }
    public Object internalServerException;
    public DescribeDataIngestionJobResponse withInternalServerException(Object internalServerException) {
        this.internalServerException = internalServerException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeDataIngestionJobResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeDataIngestionJobResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeDataIngestionJobResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
    public Object validationException;
    public DescribeDataIngestionJobResponse withValidationException(Object validationException) {
        this.validationException = validationException;
        return this;
    }
}