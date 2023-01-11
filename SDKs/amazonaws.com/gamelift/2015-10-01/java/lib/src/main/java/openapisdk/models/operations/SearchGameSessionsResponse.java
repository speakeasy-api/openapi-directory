package openapisdk.models.operations;



public class SearchGameSessionsResponse {
    public String contentType;
    public SearchGameSessionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public SearchGameSessionsResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public SearchGameSessionsResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public SearchGameSessionsResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public openapisdk.models.shared.SearchGameSessionsOutput searchGameSessionsOutput;
    public SearchGameSessionsResponse withSearchGameSessionsOutput(openapisdk.models.shared.SearchGameSessionsOutput searchGameSessionsOutput) {
        this.searchGameSessionsOutput = searchGameSessionsOutput;
        return this;
    }
    public Long statusCode;
    public SearchGameSessionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object terminalRoutingStrategyException;
    public SearchGameSessionsResponse withTerminalRoutingStrategyException(Object terminalRoutingStrategyException) {
        this.terminalRoutingStrategyException = terminalRoutingStrategyException;
        return this;
    }
    public Object unauthorizedException;
    public SearchGameSessionsResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}