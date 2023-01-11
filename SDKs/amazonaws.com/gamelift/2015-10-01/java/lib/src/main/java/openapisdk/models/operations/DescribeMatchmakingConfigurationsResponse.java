package openapisdk.models.operations;



public class DescribeMatchmakingConfigurationsResponse {
    public String contentType;
    public DescribeMatchmakingConfigurationsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeMatchmakingConfigurationsOutput describeMatchmakingConfigurationsOutput;
    public DescribeMatchmakingConfigurationsResponse withDescribeMatchmakingConfigurationsOutput(openapisdk.models.shared.DescribeMatchmakingConfigurationsOutput describeMatchmakingConfigurationsOutput) {
        this.describeMatchmakingConfigurationsOutput = describeMatchmakingConfigurationsOutput;
        return this;
    }
    public Object internalServiceException;
    public DescribeMatchmakingConfigurationsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeMatchmakingConfigurationsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Long statusCode;
    public DescribeMatchmakingConfigurationsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedRegionException;
    public DescribeMatchmakingConfigurationsResponse withUnsupportedRegionException(Object unsupportedRegionException) {
        this.unsupportedRegionException = unsupportedRegionException;
        return this;
    }
}