package openapisdk.models.operations;



public class DescribeAssetResponse {
    public String contentType;
    public DescribeAssetResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAssetResponse describeAssetResponse;
    public DescribeAssetResponse withDescribeAssetResponse(openapisdk.models.shared.DescribeAssetResponse describeAssetResponse) {
        this.describeAssetResponse = describeAssetResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeAssetResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeAssetResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeAssetResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeAssetResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeAssetResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}