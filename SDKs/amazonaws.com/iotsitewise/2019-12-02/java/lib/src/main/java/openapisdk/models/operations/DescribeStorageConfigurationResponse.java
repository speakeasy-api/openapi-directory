package openapisdk.models.operations;



public class DescribeStorageConfigurationResponse {
    public Object conflictingOperationException;
    public DescribeStorageConfigurationResponse withConflictingOperationException(Object conflictingOperationException) {
        this.conflictingOperationException = conflictingOperationException;
        return this;
    }
    public String contentType;
    public DescribeStorageConfigurationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeStorageConfigurationResponse describeStorageConfigurationResponse;
    public DescribeStorageConfigurationResponse withDescribeStorageConfigurationResponse(openapisdk.models.shared.DescribeStorageConfigurationResponse describeStorageConfigurationResponse) {
        this.describeStorageConfigurationResponse = describeStorageConfigurationResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeStorageConfigurationResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeStorageConfigurationResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public DescribeStorageConfigurationResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeStorageConfigurationResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeStorageConfigurationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeStorageConfigurationResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}