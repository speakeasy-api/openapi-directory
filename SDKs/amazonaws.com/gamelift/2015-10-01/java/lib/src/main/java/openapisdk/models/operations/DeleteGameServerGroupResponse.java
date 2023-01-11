package openapisdk.models.operations;



public class DeleteGameServerGroupResponse {
    public String contentType;
    public DeleteGameServerGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DeleteGameServerGroupOutput deleteGameServerGroupOutput;
    public DeleteGameServerGroupResponse withDeleteGameServerGroupOutput(openapisdk.models.shared.DeleteGameServerGroupOutput deleteGameServerGroupOutput) {
        this.deleteGameServerGroupOutput = deleteGameServerGroupOutput;
        return this;
    }
    public Object internalServiceException;
    public DeleteGameServerGroupResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public DeleteGameServerGroupResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public DeleteGameServerGroupResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public DeleteGameServerGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public DeleteGameServerGroupResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}