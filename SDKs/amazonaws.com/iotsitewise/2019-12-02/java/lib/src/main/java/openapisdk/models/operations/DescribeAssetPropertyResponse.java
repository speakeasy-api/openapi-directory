package openapisdk.models.operations;



public class DescribeAssetPropertyResponse {
    public String contentType;
    public DescribeAssetPropertyResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAssetPropertyResponse describeAssetPropertyResponse;
    public DescribeAssetPropertyResponse withDescribeAssetPropertyResponse(openapisdk.models.shared.DescribeAssetPropertyResponse describeAssetPropertyResponse) {
        this.describeAssetPropertyResponse = describeAssetPropertyResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeAssetPropertyResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeAssetPropertyResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeAssetPropertyResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeAssetPropertyResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeAssetPropertyResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}