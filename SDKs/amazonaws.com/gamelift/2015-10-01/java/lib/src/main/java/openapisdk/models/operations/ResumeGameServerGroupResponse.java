package openapisdk.models.operations;



public class ResumeGameServerGroupResponse {
    public String contentType;
    public ResumeGameServerGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object internalServiceException;
    public ResumeGameServerGroupResponse withInternalServiceException(Object internalServiceException) {
        this.internalServiceException = internalServiceException;
        return this;
    }
    public Object invalidRequestException;
    public ResumeGameServerGroupResponse withInvalidRequestException(Object invalidRequestException) {
        this.invalidRequestException = invalidRequestException;
        return this;
    }
    public Object notFoundException;
    public ResumeGameServerGroupResponse withNotFoundException(Object notFoundException) {
        this.notFoundException = notFoundException;
        return this;
    }
    public openapisdk.models.shared.ResumeGameServerGroupOutput resumeGameServerGroupOutput;
    public ResumeGameServerGroupResponse withResumeGameServerGroupOutput(openapisdk.models.shared.ResumeGameServerGroupOutput resumeGameServerGroupOutput) {
        this.resumeGameServerGroupOutput = resumeGameServerGroupOutput;
        return this;
    }
    public Long statusCode;
    public ResumeGameServerGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public Object unauthorizedException;
    public ResumeGameServerGroupResponse withUnauthorizedException(Object unauthorizedException) {
        this.unauthorizedException = unauthorizedException;
        return this;
    }
}