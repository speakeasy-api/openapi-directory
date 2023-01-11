package openapisdk.models.operations;



public class DescribeVirtualGatewayResponse {
    public Object badRequestException;
    public DescribeVirtualGatewayResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DescribeVirtualGatewayResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeVirtualGatewayOutput describeVirtualGatewayOutput;
    public DescribeVirtualGatewayResponse withDescribeVirtualGatewayOutput(openapisdk.models.shared.DescribeVirtualGatewayOutput describeVirtualGatewayOutput) {
        this.describeVirtualGatewayOutput = describeVirtualGatewayOutput;
        return this;
    }
    public Object forbiddenException;
    public DescribeVirtualGatewayResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public DescribeVirtualGatewayResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object notFoundException;
    public DescribeVirtualGatewayResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeVirtualGatewayResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeVirtualGatewayResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeVirtualGatewayResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}