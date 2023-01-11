package openapisdk.models.operations;



public class DescribeVirtualNodeResponse {
    public Object badRequestException;
    public DescribeVirtualNodeResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DescribeVirtualNodeResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeVirtualNodeOutput describeVirtualNodeOutput;
    public DescribeVirtualNodeResponse withDescribeVirtualNodeOutput(openapisdk.models.shared.DescribeVirtualNodeOutput describeVirtualNodeOutput) {
        this.describeVirtualNodeOutput = describeVirtualNodeOutput;
        return this;
    }
    public Object forbiddenException;
    public DescribeVirtualNodeResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public DescribeVirtualNodeResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object notFoundException;
    public DescribeVirtualNodeResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeVirtualNodeResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeVirtualNodeResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeVirtualNodeResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}