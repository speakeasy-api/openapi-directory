package openapisdk.models.operations;



public class GetPermissionGroupsResponse {
    public String contentType;
    public GetPermissionGroupsResponse withContentType(String contentType) {
        this.contentType = contentType;
        return this;
    }
    public openapisdk.models.shared.PermissionGroupModel[] permissionGroupModels;
    public GetPermissionGroupsResponse withPermissionGroupModels(openapisdk.models.shared.PermissionGroupModel[] permissionGroupModels) {
        this.permissionGroupModels = permissionGroupModels;
        return this;
    }
    public Long statusCode;
    public GetPermissionGroupsResponse withStatusCode(Long statusCode) {
        this.statusCode = statusCode;
        return this;
    }
}