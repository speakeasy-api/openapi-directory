package openapisdk.models.operations;



public class DescribeGatewayRouteResponse {
    public Object badRequestException;
    public DescribeGatewayRouteResponse withBadRequestException(Object badRequestException) {
        this.badRequestException = badRequestException;
        return this;
    }
    public String contentType;
    public DescribeGatewayRouteResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeGatewayRouteOutput describeGatewayRouteOutput;
    public DescribeGatewayRouteResponse withDescribeGatewayRouteOutput(openapisdk.models.shared.DescribeGatewayRouteOutput describeGatewayRouteOutput) {
        this.describeGatewayRouteOutput = describeGatewayRouteOutput;
        return this;
    }
    public Object forbiddenException;
    public DescribeGatewayRouteResponse withForbiddenException(Object forbiddenException) {
        this.forbiddenException = forbiddenException;
        return this;
    }
    public Object internalServerErrorException;
    public DescribeGatewayRouteResponse withInternalServerErrorException(Object internalServerErrorException) {
        this.internalServerErrorException = internalServerErrorException;
        return this;
    }
    public Object notFoundException;
    public DescribeGatewayRouteResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Object serviceUnavailableException;
    public DescribeGatewayRouteResponse withServiceUnavailableException(Object serviceUnavailableException) {
        this.serviceUnavailableException = serviceUnavailableException;
        return this;
    }
    public Long statusCode;
    public DescribeGatewayRouteResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object tooManyRequestsException;
    public DescribeGatewayRouteResponse withTooManyRequestsException(Object tooManyRequestsException) {
        this.tooManyRequestsException = tooManyRequestsException;
        return this;
    }
}