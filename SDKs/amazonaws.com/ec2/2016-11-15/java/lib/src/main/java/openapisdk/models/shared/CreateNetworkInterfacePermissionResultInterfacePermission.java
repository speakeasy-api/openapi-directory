package openapisdk.models.shared;



/**
 * CreateNetworkInterfacePermissionResultInterfacePermission
 * Information about the permission for the network interface.
**/
public class CreateNetworkInterfacePermissionResultInterfacePermission {
    public java.util.Map<String, Object> awsAccountId;
    public CreateNetworkInterfacePermissionResultInterfacePermission withAwsAccountId(java.util.Map<String, Object> awsAccountId) {
        this.awsAccountId = awsAccountId;
        return this;
    }
    public java.util.Map<String, Object> awsService;
    public CreateNetworkInterfacePermissionResultInterfacePermission withAwsService(java.util.Map<String, Object> awsService) {
        this.awsService = awsService;
        return this;
    }
    public java.util.Map<String, Object> networkInterfaceId;
    public CreateNetworkInterfacePermissionResultInterfacePermission withNetworkInterfaceId(java.util.Map<String, Object> networkInterfaceId) {
        this.networkInterfaceId = networkInterfaceId;
        return this;
    }
    public java.util.Map<String, Object> networkInterfacePermissionId;
    public CreateNetworkInterfacePermissionResultInterfacePermission withNetworkInterfacePermissionId(java.util.Map<String, Object> networkInterfacePermissionId) {
        this.networkInterfacePermissionId = networkInterfacePermissionId;
        return this;
    }
    public java.util.Map<String, Object> permission;
    public CreateNetworkInterfacePermissionResultInterfacePermission withPermission(java.util.Map<String, Object> permission) {
        this.permission = permission;
        return this;
    }
    public CreateNetworkInterfacePermissionResultInterfacePermissionPermissionState permissionState;
    public CreateNetworkInterfacePermissionResultInterfacePermission withPermissionState(CreateNetworkInterfacePermissionResultInterfacePermissionPermissionState permissionState) {
        this.permissionState = permissionState;
        return this;
    }
}