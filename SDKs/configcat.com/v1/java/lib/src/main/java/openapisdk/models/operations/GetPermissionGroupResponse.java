package openapisdk.models.operations;



public class GetPermissionGroupResponse {
    public String contentType;
    public GetPermissionGroupResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PermissionGroupModel permissionGroupModel;
    public GetPermissionGroupResponse withPermissionGroupModel(openapisdk.models.shared.PermissionGroupModel permissionGroupModel) {
        this.permissionGroupModel = permissionGroupModel;
        return this;
    }
    public Long statusCode;
    public GetPermissionGroupResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}