package openapisdk.models.operations;



public class SuspendGameServerGroupResponse {
    public String contentType;
    public SuspendGameServerGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public SuspendGameServerGroupResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public SuspendGameServerGroupResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public SuspendGameServerGroupResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public Long statusCode;
    public SuspendGameServerGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.SuspendGameServerGroupOutput suspendGameServerGroupOutput;
    public SuspendGameServerGroupResponse withSuspendGameServerGroupOutput(openapisdk.models.shared.SuspendGameServerGroupOutput suspendGameServerGroupOutput) {
        this.suspendGameServerGroupOutput = suspendGameServerGroupOutput;
        return this;
    }
    public Object unauthorizedException;
    public SuspendGameServerGroupResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}