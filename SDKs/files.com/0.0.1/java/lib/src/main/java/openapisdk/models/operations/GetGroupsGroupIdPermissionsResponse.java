package openapisdk.models.operations;



public class GetGroupsGroupIdPermissionsResponse {
    public String contentType;
    public GetGroupsGroupIdPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PermissionEntity[] permissionEntities;
    public GetGroupsGroupIdPermissionsResponse withPermissionEntities(openapisdk.models.shared.PermissionEntity[] permissionEntities) {
        this.permissionEntities = permissionEntities;
        return this;
    }
    public Long statusCode;
    public GetGroupsGroupIdPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}