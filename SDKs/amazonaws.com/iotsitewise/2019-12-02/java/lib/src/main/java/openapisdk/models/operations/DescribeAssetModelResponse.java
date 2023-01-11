package openapisdk.models.operations;



public class DescribeAssetModelResponse {
    public String contentType;
    public DescribeAssetModelResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeAssetModelResponse describeAssetModelResponse;
    public DescribeAssetModelResponse withDescribeAssetModelResponse(openapisdk.models.shared.DescribeAssetModelResponse describeAssetModelResponse) {
        this.describeAssetModelResponse = describeAssetModelResponse;
        return this;
    }
    public Object internalFailureException;
    public DescribeAssetModelResponse withInternalFailureException(Object internalFailureException) {
        this.internalFailureException = internalFailureException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeAssetModelResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object resourceNotFoundException;
    public DescribeAssetModelResponse withResourceNotFoundException(Object resourceNotFoundException) {
        this.resourceNotFoundException = resourceNotFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeAssetModelResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object throttlingException;
    public DescribeAssetModelResponse withThrottlingException(Object throttlingException) {
        this.throttlingException = throttlingException;
        return this;
    }
}