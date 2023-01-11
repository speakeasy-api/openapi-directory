package openapisdk.models.operations;



public class GetGameSessionLogUrlResponse {
    public String contentType;
    public GetGameSessionLogUrlResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.GetGameSessionLogUrlOutput getGameSessionLogUrlOutput;
    public GetGameSessionLogUrlResponse withGetGameSessionLogUrlOutput(openapisdk.models.shared.GetGameSessionLogUrlOutput getGameSessionLogUrlOutput) {
        this.getGameSessionLogUrlOutput = getGameSessionLogUrlOutput;
        return this;
    }
    public Object internalServiceException;
    public GetGameSessionLogUrlResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public GetGameSessionLogUrlResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public GetGameSessionLogUrlResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public GetGameSessionLogUrlResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public GetGameSessionLogUrlResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}