package openapisdk.models.operations;



public class DescribeMatchmakingResponse {
    public String contentType;
    public DescribeMatchmakingResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeMatchmakingOutput describeMatchmakingOutput;
    public DescribeMatchmakingResponse withDescribeMatchmakingOutput(openapisdk.models.shared.DescribeMatchmakingOutput describeMatchmakingOutput) {
        this.describeMatchmakingOutput = describeMatchmakingOutput;
        return this;
    }
    public Object internalServiceException;
    public DescribeMatchmakingResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeMatchmakingResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DescribeMatchmakingResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedRegionException;
    public DescribeMatchmakingResponse withUnsupportedRegionException(Object unsupportedRegionException) {
        this.unsupportedRegionException = unsupportedRegionException;
        return this;
    }
}