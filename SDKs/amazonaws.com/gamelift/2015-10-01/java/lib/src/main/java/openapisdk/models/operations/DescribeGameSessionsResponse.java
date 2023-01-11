package openapisdk.models.operations;



public class DescribeGameSessionsResponse {
    public String contentType;
    public DescribeGameSessionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeGameSessionsOutput describeGameSessionsOutput;
    public DescribeGameSessionsResponse withDescribeGameSessionsOutput(openapisdk.models.shared.DescribeGameSessionsOutput describeGameSessionsOutput) {
        this.describeGameSessionsOutput = describeGameSessionsOutput;
        return this;
    }
    public Object internalServiceException;
    public DescribeGameSessionsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public DescribeGameSessionsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public DescribeGameSessionsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DescribeGameSessionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object terminalRoutingStrategyException;
    public DescribeGameSessionsResponse withTerminalRoutingStrategyException(Object terminalRoutingStrategyException) {
        this.terminalRoutingStrategyException = terminalRoutingStrategyException;
        return this;
    }
    public Object unauthorizedException;
    public DescribeGameSessionsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}