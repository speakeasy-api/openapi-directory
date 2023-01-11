package openapisdk.models.operations;



public class GetPermissionsResponse {
    public String contentType;
    public GetPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PermissionEntity[] permissionEntities;
    public GetPermissionsResponse withPermissionEntities(openapisdk.models.shared.PermissionEntity[] permissionEntities) {
        this.permissionEntities = permissionEntities;
        return this;
    }
    public Long statusCode;
    public GetPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}