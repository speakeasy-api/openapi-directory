package openapisdk.models.operations;



public class PostPermissionsResponse {
    public String contentType;
    public PostPermissionsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PermissionEntity permissionEntity;
    public PostPermissionsResponse withPermissionEntity(openapisdk.models.shared.PermissionEntity permissionEntity) {
        this.permissionEntity = permissionEntity;
        return this;
    }
    public Long statusCode;
    public PostPermissionsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}