package openapisdk.models.operations;



public class DescribeGameSessionPlacementResponse {
    public String contentType;
    public DescribeGameSessionPlacementResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeGameSessionPlacementOutput describeGameSessionPlacementOutput;
    public DescribeGameSessionPlacementResponse withDescribeGameSessionPlacementOutput(openapisdk.models.shared.DescribeGameSessionPlacementOutput describeGameSessionPlacementOutput) {
        this.describeGameSessionPlacementOutput = describeGameSessionPlacementOutput;
        return this;
    }
    public Object internalServiceException;
    public DescribeGameSessionPlacementResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeGameSessionPlacementResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public DescribeGameSessionPlacementResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeGameSessionPlacementResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DescribeGameSessionPlacementResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}