package openapisdk.models.operations;



public class DescribeMatchmakingRuleSetsResponse {
    public String contentType;
    public DescribeMatchmakingRuleSetsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeMatchmakingRuleSetsOutput describeMatchmakingRuleSetsOutput;
    public DescribeMatchmakingRuleSetsResponse withDescribeMatchmakingRuleSetsOutput(openapisdk.models.shared.DescribeMatchmakingRuleSetsOutput describeMatchmakingRuleSetsOutput) {
        this.describeMatchmakingRuleSetsOutput = describeMatchmakingRuleSetsOutput;
        return this;
    }
    public Object internalServiceException;
    public DescribeMatchmakingRuleSetsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeMatchmakingRuleSetsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public DescribeMatchmakingRuleSetsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeMatchmakingRuleSetsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unsupportedRegionException;
    public DescribeMatchmakingRuleSetsResponse withUnsupportedRegionException(Object unsupportedRegionException) {
        this.unsupportedRegionException = unsupportedRegionException;
        return this;
    }
}