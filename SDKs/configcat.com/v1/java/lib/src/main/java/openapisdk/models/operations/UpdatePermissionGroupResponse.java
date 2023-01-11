package openapisdk.models.operations;



public class UpdatePermissionGroupResponse {
    public String contentType;
    public UpdatePermissionGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PermissionGroupModel permissionGroupModel;
    public UpdatePermissionGroupResponse withPermissionGroupModel(openapisdk.models.shared.PermissionGroupModel permissionGroupModel) {
        this.permissionGroupModel = permissionGroupModel;
        return this;
    }
    public Long statusCode;
    public UpdatePermissionGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}