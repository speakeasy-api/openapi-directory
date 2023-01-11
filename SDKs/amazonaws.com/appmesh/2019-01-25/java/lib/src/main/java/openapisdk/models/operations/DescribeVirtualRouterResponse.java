package openapisdk.models.operations;



public class DescribeVirtualRouterResponse {
    public Object badRequestException;
    public DescribeVirtualRouterResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DescribeVirtualRouterResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeVirtualRouterOutput describeVirtualRouterOutput;
    public DescribeVirtualRouterResponse withDescribeVirtualRouterOutput(openapisdk.models.shared.DescribeVirtualRouterOutput describeVirtualRouterOutput) {
        this.describeVirtualRouterOutput = describeVirtualRouterOutput;
        return this;
    }
    public Object forbiddenException;
    public DescribeVirtualRouterResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public DescribeVirtualRouterResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object notFoundException;
    public DescribeVirtualRouterResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeVirtualRouterResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeVirtualRouterResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeVirtualRouterResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}