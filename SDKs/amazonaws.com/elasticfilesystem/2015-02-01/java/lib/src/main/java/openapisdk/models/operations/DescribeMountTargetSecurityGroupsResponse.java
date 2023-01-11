package openapisdk.models.operations;



public class DescribeMountTargetSecurityGroupsResponse {
    public Object badRequest;
    public DescribeMountTargetSecurityGroupsResponse withBadRequest(Object badRequest) {
        this.badRequest = badRequest;
        return this;
    }
    public String contentType;
    public DescribeMountTargetSecurityGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.DescribeMountTargetSecurityGroupsResponse describeMountTargetSecurityGroupsResponse;
    public DescribeMountTargetSecurityGroupsResponse withDescribeMountTargetSecurityGroupsResponse(openapisdk.models.shared.DescribeMountTargetSecurityGroupsResponse describeMountTargetSecurityGroupsResponse) {
        this.describeMountTargetSecurityGroupsResponse = describeMountTargetSecurityGroupsResponse;
        return this;
    }
    public Object incorrectMountTargetState;
    public DescribeMountTargetSecurityGroupsResponse withIncorrectMountTargetState(Object incorrectMountTargetState) {
        this.incorrectMountTargetState = incorrectMountTargetState;
        return this;
    }
    public Object internalServerError;
    public DescribeMountTargetSecurityGroupsResponse withInternalServerError(Object internalServerError) {
        this.internalServerError = internalServerError;
        return this;
    }
    public Object mountTargetNotFound;
    public DescribeMountTargetSecurityGroupsResponse withMountTargetNotFound(Object mountTargetNotFound) {
        this.mountTargetNotFound = mountTargetNotFound;
        return this;
    }
    public Long statusCode;
    public DescribeMountTargetSecurityGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}