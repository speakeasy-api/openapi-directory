package shared

// CreateNetworkInterfacePermissionResultInterfacePermissionPermissionState
// Information about the state of the permission.
type CreateNetworkInterfacePermissionResultInterfacePermissionPermissionState struct {
	State         map[string]interface{}
	StatusMessage map[string]interface{}
}

// CreateNetworkInterfacePermissionResultInterfacePermission
// Information about the permission for the network interface.
type CreateNetworkInterfacePermissionResultInterfacePermission struct {
	AwsAccountID                 map[string]interface{}
	AwsService                   map[string]interface{}
	NetworkInterfaceID           map[string]interface{}
	NetworkInterfacePermissionID map[string]interface{}
	Permission                   map[string]interface{}
	PermissionState              *CreateNetworkInterfacePermissionResultInterfacePermissionPermissionState
}

// CreateNetworkInterfacePermissionResult
// Contains the output of CreateNetworkInterfacePermission.
type CreateNetworkInterfacePermissionResult struct {
	InterfacePermission *CreateNetworkInterfacePermissionResultInterfacePermission
}
