package openapisdk.models.operations;



public class ActionsGetGithubActionsPermissionsOrganizationResponse {
    public String contentType;
    public ActionsGetGithubActionsPermissionsOrganizationResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public Long statusCode;
    public ActionsGetGithubActionsPermissionsOrganizationResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
    public openapisdk.models.shared.ActionsOrganizationPermissions actionsOrganizationPermissions;
    public ActionsGetGithubActionsPermissionsOrganizationResponse withActionsOrganizationPermissions(openapisdk.models.shared.ActionsOrganizationPermissions actionsOrganizationPermissions) {
        this.actionsOrganizationPermissions = actionsOrganizationPermissions;
        return this;
    }
}