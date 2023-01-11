package openapisdk.models.operations;



public class UpdateGameServerGroupResponse {
    public String contentType;
    public UpdateGameServerGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public UpdateGameServerGroupResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public UpdateGameServerGroupResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public UpdateGameServerGroupResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public UpdateGameServerGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public UpdateGameServerGroupResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
    public openapisdk.models.shared.UpdateGameServerGroupOutput updateGameServerGroupOutput;
    public UpdateGameServerGroupResponse withUpdateGameServerGroupOutput(openapisdk.models.shared.UpdateGameServerGroupOutput updateGameServerGroupOutput) {
        this.updateGameServerGroupOutput = updateGameServerGroupOutput;
        return this;
    }
}