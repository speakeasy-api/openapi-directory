package openapisdk.models.shared;



/**
 * CreateNetworkInterfacePermissionResultInterfacePermissionPermissionState
 * Information about the state of the permission.
**/
public class CreateNetworkInterfacePermissionResultInterfacePermissionPermissionState {
    public java.util.Map<String, Object> state;
    public CreateNetworkInterfacePermissionResultInterfacePermissionPermissionState withState(java.util.Map<String, Object> state) {
        this.state = state;
        return this;
    }
    public java.util.Map<String, Object> statusMessage;
    public CreateNetworkInterfacePermissionResultInterfacePermissionPermissionState withStatusMessage(java.util.Map<String, Object> statusMessage) {
        this.statusMessage = statusMessage;
        return this;
    }
}