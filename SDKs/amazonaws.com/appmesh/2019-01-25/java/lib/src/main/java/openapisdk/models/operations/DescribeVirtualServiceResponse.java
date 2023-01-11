package openapisdk.models.operations;



public class DescribeVirtualServiceResponse {
    public Object badRequestException;
    public DescribeVirtualServiceResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DescribeVirtualServiceResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeVirtualServiceOutput describeVirtualServiceOutput;
    public DescribeVirtualServiceResponse withDescribeVirtualServiceOutput(openapisdk.models.shared.DescribeVirtualServiceOutput describeVirtualServiceOutput) {
        this.describeVirtualServiceOutput = describeVirtualServiceOutput;
        return this;
    }
    public Object forbiddenException;
    public DescribeVirtualServiceResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public DescribeVirtualServiceResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object notFoundException;
    public DescribeVirtualServiceResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeVirtualServiceResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeVirtualServiceResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeVirtualServiceResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}