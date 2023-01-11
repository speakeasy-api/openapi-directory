package openapisdk.models.operations;



public class CreatePermissionGroupResponse {
    public String contentType;
    public CreatePermissionGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PermissionGroupModel permissionGroupModel;
    public CreatePermissionGroupResponse withPermissionGroupModel(openapisdk.models.shared.PermissionGroupModel permissionGroupModel) {
        this.permissionGroupModel = permissionGroupModel;
        return this;
    }
    public Long statusCode;
    public CreatePermissionGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}