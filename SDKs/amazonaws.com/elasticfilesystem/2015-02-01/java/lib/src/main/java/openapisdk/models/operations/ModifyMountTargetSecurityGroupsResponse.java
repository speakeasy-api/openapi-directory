package openapisdk.models.operations;



public class ModifyMountTargetSecurityGroupsResponse {
    public Object badRequest;
    public ModifyMountTargetSecurityGroupsResponse withBadRequest(Object badRequest) {
        this.badRequest = badRequest;
        return this;
    }
    public String contentType;
    public ModifyMountTargetSecurityGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Object incorrectMountTargetState;
    public ModifyMountTargetSecurityGroupsResponse withIncorrectMountTargetState(Object incorrectMountTargetState) {
        this.incorrectMountTargetState = incorrectMountTargetState;
        return this;
    }
    public Object internalServerError;
    public ModifyMountTargetSecurityGroupsResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object mountTargetNotFound;
    public ModifyMountTargetSecurityGroupsResponse withMountTargetNotFound(Object mountTargetNotFound) {
        this.mountTargetNotFound = mountTargetNotFound;
        return this;
    }
    public Object securityGroupLimitExceeded;
    public ModifyMountTargetSecurityGroupsResponse withSecurityGroupLimitExceeded(Object securityGroupLimitExceeded) {
        this.securityGroupLimitExceeded = securityGroupLimitExceeded;
        return this;
    }
    public Object securityGroupNotFound;
    public ModifyMountTargetSecurityGroupsResponse withSecurityGroupNotFound(Object securityGroupNotFound) {
        this.securityGroupNotFound = securityGroupNotFound;
        return this;
    }
    public Long statusCode;
    public ModifyMountTargetSecurityGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}