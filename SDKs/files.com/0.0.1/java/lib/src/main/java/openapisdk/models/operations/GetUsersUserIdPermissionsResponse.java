package openapisdk.models.operations;



public class GetUsersUserIdPermissionsResponse {
    public String contentType;
    public GetUsersUserIdPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PermissionEntity[] permissionEntities;
    public GetUsersUserIdPermissionsResponse withPermissionEntities(openapisdk.models.shared.PermissionEntity[] permissionEntities) {
        this.permissionEntities = permissionEntities;
        return this;
    }
    public Long statusCode;
    public GetUsersUserIdPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}