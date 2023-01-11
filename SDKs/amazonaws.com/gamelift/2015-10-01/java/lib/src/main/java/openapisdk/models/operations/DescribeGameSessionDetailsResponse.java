package openapisdk.models.operations;



public class DescribeGameSessionDetailsResponse {
    public String contentType;
    public DescribeGameSessionDetailsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeGameSessionDetailsOutput describeGameSessionDetailsOutput;
    public DescribeGameSessionDetailsResponse withDescribeGameSessionDetailsOutput(openapisdk.models.shared.DescribeGameSessionDetailsOutput describeGameSessionDetailsOutput) {
        this.describeGameSessionDetailsOutput = describeGameSessionDetailsOutput;
        return this;
    }
    public Object internalServiceException;
    public DescribeGameSessionDetailsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeGameSessionDetailsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public DescribeGameSessionDetailsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeGameSessionDetailsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object terminalRoutingStrategyException;
    public DescribeGameSessionDetailsResponse withTerminalRoutingStrategyException(Object terminalRoutingStrategyException) {
        this.terminalRoutingStrategyException = terminalRoutingStrategyException;
        return this;
    }
    public Object unauthorizedException;
    public DescribeGameSessionDetailsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}