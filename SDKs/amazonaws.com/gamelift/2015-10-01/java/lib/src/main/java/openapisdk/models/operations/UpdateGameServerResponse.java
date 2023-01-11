package openapisdk.models.operations;



public class UpdateGameServerResponse {
    public String contentType;
    public UpdateGameServerResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public UpdateGameServerResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateGameServerResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public UpdateGameServerResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateGameServerResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public UpdateGameServerResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    public openapisdk.models.shared.UpdateGameServerOutput updateGameServerOutput;
    public UpdateGameServerResponse withUpdateGameServerOutput(openapisdk.models.shared.UpdateGameServerOutput updateGameServerOutput) {
        this.updateGameServerOutput = updateGameServerOutput;
        return this;
    }
}