package openapisdk.models.operations;



public class RegisterGameServerResponse {
    public Object conflictException;
    public RegisterGameServerResponse withConflictException(Object conflictException) {
        this.conflictException = conflictException;
        return this;
    }
    public String contentType;
    public RegisterGameServerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public RegisterGameServerResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public RegisterGameServerResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object limitExceededException;
    public RegisterGameServerResponse withLimitExceededException(Object limitExceededException) {
        this.limitExceededException = limitExceededException;
        return this;
    }
    public openapisdk.models.shared.RegisterGameServerOutput registerGameServerOutput;
    public RegisterGameServerResponse withRegisterGameServerOutput(openapisdk.models.shared.RegisterGameServerOutput registerGameServerOutput) {
        this.registerGameServerOutput = registerGameServerOutput;
        return this;
    }
    public Long statusCode;
    public RegisterGameServerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public RegisterGameServerResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}